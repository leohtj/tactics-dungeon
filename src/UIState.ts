import { Assets } from "./Assets"
import { computed, observable } from "mobx"
import { World } from "./World"
import { ScreenVector } from "./ScreenVector"
import { Cell } from "./Cell"
import { Unit } from "./Unit"

type Showing = { screen: 'board' } | { screen: 'unit', unit: Unit }

export type FrameInfo = { timestamp: number, deltaTime: number }

export class UIState {
    @observable showing: Showing = { screen: 'board' }
    world: World
    assets: Assets
    cellScreenWidth: number = 24
    cellScreenHeight: number = 24
    frameResolvers: ((frameInfo: FrameInfo) => void)[] = []

    constructor(world: World, assets: Assets) {
        this.world = world
        this.assets = assets
    }

    @computed get boardScreenWidth() {
        return this.cellScreenWidth * this.world.boardWidth
    }

    @computed get boardScreenHeight() {
        return this.cellScreenHeight * this.world.boardHeight
    }

    animationHandle: number|null = null
    startFrames() {
        if (this.animationHandle != null)
            cancelAnimationFrame(this.animationHandle)

        let lastFrame: number|null
        const frame = (timestamp: number) => {
            const deltaTime = lastFrame === null ? 0 : timestamp-lastFrame

            const frameInfo = { timestamp: timestamp, deltaTime: deltaTime }

            const frameResolvers = this.frameResolvers
            this.frameResolvers = []
            for (const resolve of frameResolvers) {
                resolve(frameInfo)
            }
            
            this.animationHandle = requestAnimationFrame(frame)
            lastFrame = timestamp
        }
        this.animationHandle = requestAnimationFrame(frame)
    }

    nextFrame(): Promise<FrameInfo> {
        return new Promise((resolve, reject) => {
            this.frameResolvers.push(resolve)
        })
    }

    screenPointToCell(pos: ScreenVector): Cell {
        const cx = Math.min(this.world.boardWidth-1, Math.max(0, Math.floor(pos.x / this.cellScreenWidth)))
        const cy = Math.min(this.world.boardHeight-1, Math.max(0, Math.floor(pos.y / this.cellScreenHeight)))
        return this.world.grid[cx][cy]
    }

    /** Position of the upper left corner of the cell in screen coordinates. */
    cellToScreenPoint(cell: Cell): ScreenVector {
        let dx = cell.pos.x * this.cellScreenWidth
        let dy = cell.pos.y * this.cellScreenHeight
        return new ScreenVector(dx, dy)
    }

    /** Position of the center of the cell in screen coordinates. */
    cellToScreenPointCenter(cell: Cell): ScreenVector {
        const { x, y } = this.cellToScreenPoint(cell)
        return new ScreenVector(x + this.cellScreenWidth/2, y + this.cellScreenHeight/2)
    }
}