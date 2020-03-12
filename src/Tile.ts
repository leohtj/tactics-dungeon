const cols = 38

// The oryx world tiles have a number of different sets of
// tiles that vary together, we call them a Biome
export enum Structure {
    Wall = 0,
    WallCracked,
    WallVeryCracked,
    Floor,
    FloorIndent,
    FloorCracked,
    FloorPattern,
    UpStair,
    DownStair,
    WallRaised,
    WallEast,
    WallEastWest,
    WallWest,
    WallSouth,
    WallNorthSouth,
    WallNorth,
    WallEastSouth,
    WallSouthWest,
    WallNorthEast,
    WallNorthWest,
    WallIntersection,
    WallEastSouthWest,
    WallNorthSouthWest,
    WallNorthEastSouth,
    WallNorthEastWest,
    WallNorthSouthCracked,
    WallEastWestCracked
}

// Starts 28 to 41
export enum Furniture {
    Grave = 0,
    GraveCracked,
    GraveDestroyed,
    Bones1,
    Bones2,
    Bones3,
    Bones4,
    Bones5,
    Bones6,
    Bones7,
    Fire1,
    Fire2,
    Torch1,
    Torch2,
    WebNorthWest,
    WebNorthEast,
    WebEastSouth,
    WebSouthWest,
    WebIntersection1,
    WebIntersection2,
    BloodPool,
    BloodSpatter2,
    BloodSpatter3,
    BloodSpatter4,
    AcidPool,
    AcidSpatter,
    Brazier1,
    Brazier2,
    DoorClosed,
    DoorOpen,
    DoorBarred,
    DoorNoHandle,
    DoorBarredBack,
    DoorBroken,
    DoorAjar,
    MetalDoor,
    MetalDoorOpen,
    IcyDoor,
    IcyDoorOpen,
    DoorBoarded,
    DoorBoardedBroken,
    DoorPortal,
    Porticullis,
    PorticullisOpen,
    DoorGlass,
    Chest,
    ChestOpenGold,
    ChestOpenSpikes,
    ChestOpen,
    Coffin,
    CoffinOpen,
    CoffinAjar,
    Barrel,
    BarrelBroken,
    Bucket,
    Bucket2,
    Trapdoor,
    TrapdoorOpen,
    Bookshelf,
    BookshelfEmpty,
    Table,
    TableWithPaper,
    ChairSouth,
    ThroneSouth,
    SwordRack,
    SwordRack2,
    ChestSouth,
    ChestSouthOpenGold,
    Crate,
    CrateOpen,
    Unused,
    Unused1,
    Cauldron,
    Cauldron2,
    StatueMage,
    StatueBroken,
    StatueArcher,
    StatueFighter,
    VasePillar,
    VasePillarCracked,
    VasePillarBroken,
    Vase,
    VaseCracked,
    VaseBroken,
    Spikes,
    AlchemyCircle,
    AlchemyCirclePentagram,
    AlchemyCircleSkull,
    BearTrap,
    Chute,
    Grate,
    Grate2,
    VaseBlue,
    VaseBlueCracked,
    VaseBlueBroken,
    VaseGreen,
    VaseGreenCracked,
    VaseGreenBroken,
    Fountain,
    FountainOff,
    TombstoneGem,
    TombstoneSnakes,
    TombstoneHead,
    TombstoneRing,
    TombstoneCross,
    TombstoneBroken,
    VaseRed,
    VaseRedCracked,
    VaseRedBroken,
    VaseBrown,
    VaseBrownCracked,
    VaseBrownBroken,
    Cage,
    MetalCage,
    Cage2,
    MetalCage2,
    WellSite,
    Well,
    Hay,
    HayGrey,
    BookRed,
    BookBlack,
    BookBlue,
    BookGreen,
    Skull,
    SkullYak,
    TableEast,
    TableEastWest,
    TableWest,
    TableEastPlates,
    TableWestPlates,
    BenchEast,
    BenchEastWest,
    BenchWest,
    BookRed2,
    BookBlack2,
    BookBlue2,
    BookGreen2,
    Skull2,
    Ribcage,
    Moon,
    MoonBlue,
    MoonPurple,
    MoonOrange,
    MoonCracked,
    MoonBlueRings
}

// Starts 43 to 54
export enum Plants {
    Bush = 0,
    Bush2,
    LittleBushes,
    LittleBushes2,
    LittleBush,
    BushBrown,
    BushBrown2,
    LittleBushesBrown,
    LittleBushesBrown2,
    LittleBushBrown,
    Lilypads,
    Lilypad,
    FlowersThree,
    FlowersTwo,
    Flower,
    PadsFour,
    BoulderBrown,
    BoulderGrey,
    CloverStar,
    CloverStarSmall,
    PuddleBlue,
    PuddleBlueSmall,
    PuddleRed,
    PuddleRedSmall,
    CaveEntrance,
    PointyBoulderBrown,
    PointyBoulderGrey,
    PointyBoulderGrey2,
    SittingStones,
    Cactus,
    Cactus2,
    Cactus3,
    PuddleGreen,
    PuddleGreenSmall,
    PuddleBrown,
    PuddleBrownSmal,
    TreeApple,
    TreeAppleFruiting,
    TreeAppleAutumn,
    TreeAppleDead,
    TreeAppleStump,
    TreePine,
    TreePineFrosted,
    // continues
}

export enum Biome {
    Stone = 0,
    Stone2,
    Rock,
    Clay,
    Inlaid,
    Jade,
    Cyan,
    Blue,
    Yellow,
    Grates,
    Metal,
    OldStone,
    Mossy,
    Dirt,
    Hedge,
    SkullHedge,
    Fences,
    SnowStone,
    SnowStone2,
    Sandstone
}

export enum Pattern {
    Floor = "floor",
    Wall = "wall"
}


export function pathable(tile: number): boolean {
    return tile % cols !== 0
}    