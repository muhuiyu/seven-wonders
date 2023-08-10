import { card, cardVariants } from '../definitions/Card'
import { clay, coin, glass, loom, ore, papyrus, stone, wood } from '../definitions/Resource'
import {
  coinPer,
  engineering,
  maths,
  point,
  pointPer,
  shield,
  transactionDiscountFor,
  writing,
} from '../definitions/Reward'
import { combine } from '../utils/combine'
import oneOf from '../utils/oneOf'

//-------------------------------------------------------------------------------------------------
// RAW MATERIALS
//-------------------------------------------------------------------------------------------------
export const [lumberYard3p, lumberYard4p] = cardVariants(
  { id: 'lumberYard', name: 'Lumber Yard', category: 'rawMaterials', phase: 'age1', reward: wood(1) },
  [3, 4] as const,
)

export const [stonePit3p, stonePit5p] = cardVariants(
  { id: 'stonePit', name: 'Stone Pit', category: 'rawMaterials', phase: 'age1', reward: stone(1) },
  [3, 5] as const,
)

export const [clayPool3p, clayPool5p] = cardVariants(
  { id: 'clayPool', name: 'Clay Pool', category: 'rawMaterials', phase: 'age1', reward: clay(1) },
  [3, 5] as const,
)

export const [oreVein3p, oreVein4p] = cardVariants(
  { id: 'oreVein', name: 'Ore Vein', category: 'rawMaterials', phase: 'age1', reward: ore(1) },
  [3, 4] as const,
)

export const treeFarm = card({
  id: 'treeFarm',
  name: 'Tree Farm',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(wood(1), clay(1)),
  minPlayers: 6,
})

export const excavation = card({
  id: 'excavation',
  name: 'Excavation',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(stone(1), clay(1)),
  minPlayers: 4,
})

export const clayPit = card({
  id: 'clayPit',
  name: 'Clay Pit',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(clay(1), ore(1)),
  minPlayers: 3,
})

export const timberYard = card({
  id: 'timberYard',
  name: 'Timber Yard',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(wood(1), stone(1)),
  minPlayers: 3,
})

export const forestCave = card({
  id: 'forestCave',
  name: 'Forest Cave',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(wood(1), ore(1)),
  minPlayers: 5,
})

export const mine = card({
  id: 'mine',
  name: 'Mine',
  category: 'rawMaterials',
  phase: 'age1',
  cost: coin(1),
  reward: oneOf(stone(1), ore(1)),
  minPlayers: 6,
})

export const [sawmill3p, sawmill4p] = cardVariants(
  {
    id: 'sawmill',
    name: 'Sawmill',
    category: 'rawMaterials',
    phase: 'age2',
    cost: coin(1),
    reward: wood(2),
  },
  [3, 4] as const,
)

export const [quarry3p, quarry4p] = cardVariants(
  {
    id: 'quarry',
    name: 'Quarry',
    category: 'rawMaterials',
    phase: 'age2',
    cost: coin(1),
    reward: stone(2),
  },
  [3, 4] as const,
)

export const [brickyard3p, brickyard4p] = cardVariants(
  {
    id: 'brickyard',
    name: 'Brickyard',
    category: 'rawMaterials',
    phase: 'age2',
    cost: coin(1),
    reward: clay(2),
  },
  [3, 4] as const,
)

export const [foundry3p, foundry4p] = cardVariants(
  {
    id: 'foundry',
    name: 'Foundry',
    category: 'rawMaterials',
    phase: 'age2',
    cost: coin(1),
    reward: ore(2),
  },
  [3, 4] as const,
)

//-------------------------------------------------------------------------------------------------
// MANUFACTURED GOODS
//-------------------------------------------------------------------------------------------------
export const [loom1_3p, loom1_6p] = cardVariants(
  {
    id: 'loom1',
    name: 'Loom',
    category: 'manufacturedGoods',
    phase: 'age1',
    reward: loom(1),
  },
  [3, 6] as const,
)

export const [glassworks1_3p, glassworks1_6p] = cardVariants(
  {
    id: 'glassworks1',
    name: 'Glassworks',
    category: 'manufacturedGoods',
    phase: 'age1',
    reward: glass(1),
  },
  [3, 6] as const,
)

export const [press1_3p, press1_6p] = cardVariants(
  {
    id: 'press1',
    name: 'Press',
    category: 'manufacturedGoods',
    phase: 'age1',
    reward: papyrus(1),
  },
  [3, 6] as const,
)

export const [loom2_3p, loom2_5p] = cardVariants(
  {
    id: 'loom2',
    name: 'Loom',
    category: 'manufacturedGoods',
    phase: 'age2',
    reward: loom(1),
  },
  [3, 5] as const,
)

export const [glassworks2_3p, glassworks2_5p] = cardVariants(
  {
    id: 'glassworks2',
    name: 'Glassworks',
    category: 'manufacturedGoods',
    phase: 'age2',
    reward: glass(1),
  },
  [3, 5] as const,
)

export const [press2_3p, press2_5p] = cardVariants(
  {
    id: 'press2',
    name: 'Press',
    category: 'manufacturedGoods',
    phase: 'age2',
    reward: papyrus(1),
  },
  [3, 5] as const,
)

//-------------------------------------------------------------------------------------------------
// GUILDS
//-------------------------------------------------------------------------------------------------
export const workersGuild = card({
  id: 'workersGuild',
  name: 'Workers Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(ore(2), clay(1), stone(1), wood(1)),
  reward: pointPer('rawMaterials', 'neighborhood'),
})

export const craftsmensGuild = card({
  id: 'craftsmensGuild',
  name: 'Craftsmens Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(ore(2), stone(2)),
  reward: pointPer('manufacturedGoods', 2, 'neighborhood'),
})

export const tradersGuild = card({
  id: 'tradersGuild',
  name: 'Traders Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(loom(1), glass(1), papyrus(1)),
  reward: pointPer('commercialStructures', 'neighborhood'),
})

export const philosophersGuild = card({
  id: 'philosophersGuild',
  name: 'Philosophers Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(clay(3), loom(1), papyrus(1)),
  reward: pointPer('scientificStructures', 'neighborhood'),
})

export const spiesGuild = card({
  id: 'spiesGuild',
  name: 'Spies Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(clay(3), glass(1)),
  reward: pointPer('militaryStructures', 'neighborhood'),
})

export const strategistsGuild = card({
  id: 'strategistsGuild',
  name: 'Strategists Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(ore(2), stone(1), loom(1)),
  reward: pointPer('defeatTokens', ['leftNeighbor', 'rightNeighbor']),
})

export const shipownersGuild = card({
  id: 'shipownersGuild',
  name: 'Shipowners Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(wood(3), papyrus(1), glass(1)),
  reward: [pointPer('rawMaterials'), pointPer('manufacturedGoods'), pointPer('guilds')],
})

export const scientistsGuild = card({
  id: 'scientistsGuild',
  name: 'Scientists Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(wood(2), ore(2), papyrus(1)),
  reward: 'wildcardScience',
})

export const magistratesGuild = card({
  id: 'magistratesGuild',
  name: 'Magistrates Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(wood(3), stone(1), loom(1)),
  reward: pointPer('civilianStructures', 'neighborhood'),
})

export const buildersGuild = card({
  id: 'buildersGuild',
  name: 'Builders Guild',
  category: 'guilds',
  phase: 'age3',
  cost: combine(stone(2), clay(2), glass(1)),
  reward: pointPer('wonderStages', 'neighborhood'),
})

//-------------------------------------------------------------------------------------------------
// CIVILIAN STRUCTURES
//-------------------------------------------------------------------------------------------------
export const [well4p, well7p] = cardVariants(
  {
    id: 'well',
    name: 'Well',
    category: 'civilianStructures',
    phase: 'age1',
    reward: point(3),
  },
  [4, 7] as const,
)

export const [theater3p, theater6p] = cardVariants(
  {
    id: 'theater',
    name: 'Theater',
    category: 'civilianStructures',
    phase: 'age1',
    reward: point(3),
  },
  [3, 6] as const,
)

export const [alter3p, alter5p] = cardVariants(
  {
    id: 'alter',
    name: 'Alter',
    category: 'civilianStructures',
    phase: 'age1',
    reward: point(3),
  },
  [3, 5] as const,
)

export const [baths3p, baths7p] = cardVariants(
  {
    id: 'baths',
    name: 'Baths',
    category: 'civilianStructures',
    phase: 'age1',
    cost: stone(1),
    reward: point(3),
  },
  [3, 7] as const,
)

export const [temple3p, temple6p] = cardVariants(
  {
    id: 'temple',
    name: 'Temple',
    category: 'civilianStructures',
    phase: 'age2',
    cost: combine(wood(1), clay(1), glass(1)),
    reward: point(4),
  },
  [3, 6] as const,
)

export const [statue3p, statue7p] = cardVariants(
  {
    id: 'statue',
    name: 'Statue',
    category: 'civilianStructures',
    phase: 'age2',
    cost: combine(wood(1), ore(2)),
    chainFrom: 'theater',
    reward: point(4),
  },
  [3, 7] as const,
)

export const [courthouse3p, courthouse5p] = cardVariants(
  {
    id: 'courthouse',
    name: 'Courthouse',
    category: 'civilianStructures',
    phase: 'age2',
    cost: combine(clay(2), loom(1)),
    chainFrom: 'scriptorium',
    reward: point(4),
  },
  [3, 5] as const,
)

export const [aqueduct3p, aqueduct7p] = cardVariants(
  {
    id: 'aqueduct',
    name: 'Aqueduct',
    category: 'civilianStructures',
    phase: 'age2',
    cost: stone(3),
    chainFrom: 'baths',
    reward: point(5),
  },
  [3, 7] as const,
)

export const [pantheon3p, pantheon7p] = cardVariants(
  {
    id: 'pantheon',
    name: 'Pantheon',
    category: 'civilianStructures',
    phase: 'age3',
    cost: combine(clay(2), ore(1), glass(1), papyrus(1), loom(1)),
    chainFrom: '',
    reward: point(7),
  },
  [3, 7] as const,
)

export const [gardens3p, gardens4p] = cardVariants(
  {
    id: 'gardens',
    name: 'Gardens',
    category: 'civilianStructures',
    phase: 'age3',
    cost: combine(clay(2), wood(1)),
    chainFrom: 'statue',
    reward: point(5),
  },
  [3, 4] as const,
)

export const [senate3p, senate5p] = cardVariants(
  {
    id: 'senate',
    name: 'Senate',
    category: 'civilianStructures',
    phase: 'age3',
    cost: combine(wood(2), stone(1), ore(1)),
    chainFrom: 'library',
    reward: point(6),
  },
  [3, 5] as const,
)

export const [townHall3p, townHall6p] = cardVariants(
  {
    id: 'townHall',
    name: 'Town Hall',
    category: 'civilianStructures',
    phase: 'age3',
    cost: combine(stone(2), ore(1), glass(1)),
    reward: point(6),
  },
  [3, 6] as const,
)

export const [palace3p, palace7p] = cardVariants(
  {
    id: 'palace',
    name: 'Palace',
    category: 'civilianStructures',
    phase: 'age3',
    cost: combine(wood(1), stone(1), ore(1), clay(1), glass(1), papyrus(1), loom(1)),
    reward: point(8),
  },
  [3, 7] as const,
)

//-------------------------------------------------------------------------------------------------
// MILITARY STRUCTURES
//-------------------------------------------------------------------------------------------------
export const [barracks3p, barracks5p] = cardVariants(
  {
    id: 'barracks',
    name: 'Barracks',
    category: 'militaryStructures',
    phase: 'age1',
    cost: ore(1),
    reward: shield(1),
  },
  [3, 5] as const,
)

export const [stockade3p, stockade7p] = cardVariants(
  {
    id: 'stockade',
    name: 'Stockade',
    category: 'militaryStructures',
    phase: 'age1',
    cost: wood(1),
    reward: shield(1),
  },
  [3, 7] as const,
)

export const [guardTower3p, guardTower4p] = cardVariants(
  {
    id: 'guardTower',
    name: 'Guard Tower',
    category: 'militaryStructures',
    phase: 'age1',
    cost: clay(1),
    reward: shield(1),
  },
  [3, 4] as const,
)

export const [walls3p, walls7p] = cardVariants(
  {
    id: 'walls',
    name: 'Walls',
    category: 'militaryStructures',
    phase: 'age2',
    cost: stone(3),
    reward: shield(2),
  },
  [3, 7] as const,
)

export const [trainingGround4p, trainingGround6p, trainingGround7p] = cardVariants(
  {
    id: 'trainingGround',
    name: 'Training Grouond',
    category: 'militaryStructures',
    phase: 'age2',
    cost: combine(wood(1), ore(2)),
    reward: shield(2),
  },
  [4, 6, 7] as const,
)

export const [archeryRange3p, archeryRange6p] = cardVariants(
  {
    id: 'archeryRange',
    name: 'Archery Range',
    category: 'militaryStructures',
    phase: 'age2',
    cost: combine(wood(2), ore(1)),
    chainFrom: 'workshop',
    reward: shield(2),
  },
  [3, 6] as const,
)

export const [stables3p, stables5p] = cardVariants(
  {
    id: 'stables',
    name: 'Stables',
    category: 'militaryStructures',
    phase: 'age2',
    cost: combine(wood(1), ore(1), clay(1)),
    chainFrom: 'apothecary',
    reward: shield(2),
  },
  [3, 5] as const,
)

export const [siegeWorkshop3p, siegeWorkshop5p] = cardVariants(
  {
    id: 'siegeWorkshop',
    name: 'Siege Workshop',
    category: 'militaryStructures',
    phase: 'age3',
    cost: combine(wood(1), clay(3)),
    chainFrom: 'laboratory',
    reward: shield(3),
  },
  [3, 5] as const,
)

export const [fortifications3p, fortifications7p] = cardVariants(
  {
    id: 'fortifications',
    name: 'Fortifications',
    category: 'militaryStructures',
    phase: 'age3',
    cost: combine(ore(3), clay(1)),
    chainFrom: 'walls',
    reward: shield(3),
  },
  [3, 7] as const,
)

export const [circus4p, circus6p] = cardVariants(
  {
    id: 'circus',
    name: 'Circus',
    category: 'militaryStructures',
    phase: 'age3',
    cost: combine(stone(3), ore(1)),
    chainFrom: 'trainingGround',
    reward: shield(3),
  },
  [4, 6] as const,
)

export const [arsenal3p, arsenal5p] = cardVariants(
  {
    id: 'arsenal',
    name: 'Arsenal',
    category: 'militaryStructures',
    phase: 'age3',
    cost: combine(wood(2), ore(1), loom(1)),
    reward: shield(3),
  },
  [3, 5] as const,
)

export const [castrum4p, castrum7p] = cardVariants(
  {
    id: 'castrum',
    name: 'Castrum',
    category: 'militaryStructures',
    phase: 'age3',
    cost: combine(wood(1), clay(2), papyrus(1)),
    reward: shield(3),
  },
  [4, 7] as const,
)

//-------------------------------------------------------------------------------------------------
// SCIENTIFIC STRUCTURES
//-------------------------------------------------------------------------------------------------
export const [scriptorium3p, scriptorium4p] = cardVariants(
  {
    id: 'scriptorium',
    name: 'Scriptorium',
    category: 'scientificStructures',
    phase: 'age1',
    cost: papyrus(1),
    reward: writing,
  },
  [3, 4] as const,
)

export const [apothecary3p, apothecary5p] = cardVariants(
  {
    id: 'apothecary',
    name: 'Apothecary',
    category: 'scientificStructures',
    phase: 'age1',
    cost: loom(1),
    reward: maths,
  },
  [3, 5] as const,
)

export const [workshop3p, workshop7p] = cardVariants(
  {
    id: 'workshop',
    name: 'Workshop',
    category: 'scientificStructures',
    phase: 'age1',
    cost: glass(1),
    reward: engineering,
  },
  [3, 7] as const,
)

export const [dispensary3p, dispensary4p] = cardVariants(
  {
    id: 'dispensary',
    name: 'Dispensary',
    category: 'scientificStructures',
    phase: 'age2',
    cost: combine(ore(2), glass(1)),
    chainFrom: 'apothecary',
    reward: maths,
  },
  [3, 4] as const,
)

export const [laboratory3p, laboratory5p] = cardVariants(
  {
    id: 'laboratory',
    name: 'Laboratory',
    category: 'scientificStructures',
    phase: 'age2',
    cost: combine(clay(2), papyrus(1)),
    chainFrom: 'workshop',
    reward: engineering,
  },
  [3, 5] as const,
)

export const [school3p, school7p] = cardVariants(
  {
    id: 'school',
    name: 'School',
    category: 'scientificStructures',
    phase: 'age2',
    cost: combine(wood(1), papyrus(1)),
    reward: writing,
  },
  [3, 7] as const,
)
export const [library3p, library6p] = cardVariants(
  {
    id: 'library',
    name: 'Library',
    category: 'scientificStructures',
    phase: 'age2',
    cost: combine(stone(2), loom(1)),
    chainFrom: 'scriptorium',
    reward: writing,
  },
  [3, 6] as const,
)

export const [university3p, university4p] = cardVariants(
  {
    id: 'university',
    name: 'University',
    category: 'scientificStructures',
    phase: 'age3',
    cost: combine(wood(2), glass(1), papyrus(1)),
    chainFrom: 'library',
    reward: writing,
  },
  [3, 4] as const,
)

export const [observatory3p, observatory7p] = cardVariants(
  {
    id: 'observatory',
    name: 'Observatory',
    category: 'scientificStructures',
    phase: 'age3',
    cost: combine(ore(2), glass(1), loom(1)),
    chainFrom: 'laboratory',
    reward: engineering,
  },
  [3, 7] as const,
)

export const [study3p, study5p] = cardVariants(
  {
    id: 'study',
    name: 'Study',
    category: 'scientificStructures',
    phase: 'age3',
    cost: combine(wood(1), papyrus(1), loom(1)),
    chainFrom: 'school',
    reward: engineering,
  },
  [3, 5] as const,
)

export const [academy3p, academy7p] = cardVariants(
  {
    id: 'academy',
    name: 'Academy',
    category: 'scientificStructures',
    phase: 'age3',
    cost: combine(stone(3), glass(1)),
    chainFrom: 'school',
    reward: maths,
  },
  [3, 7] as const,
)

export const [lodge3p, lodge6p] = cardVariants(
  {
    id: 'lodge',
    name: 'Lodge',
    category: 'scientificStructures',
    phase: 'age3',
    cost: combine(clay(2), papyrus(1), loom(1)),
    chainFrom: 'dispensary',
    reward: maths,
  },
  [3, 6] as const,
)

//-------------------------------------------------------------------------------------------------
// COMMERCIAL STRUCTURES
//-------------------------------------------------------------------------------------------------
export const [tavern4p, tavern5p, tavern7p] = cardVariants(
  {
    id: 'tavern',
    name: 'Tavern',
    category: 'commercialStructures',
    phase: 'age1',
    reward: coin(5),
  },
  [4, 5, 7] as const,
)

export const [marketplace3p, marketplace6p] = cardVariants(
  {
    id: 'marketplace',
    name: 'Marketplace',
    category: 'commercialStructures',
    phase: 'age1',
    reward: [
      transactionDiscountFor('glass', ['leftNeighbor', 'rightNeighbor']),
      transactionDiscountFor('loom', ['leftNeighbor', 'rightNeighbor']),
      transactionDiscountFor('papyrus', ['leftNeighbor', 'rightNeighbor']),
    ],
  },
  [3, 6] as const,
)

export const [eastTradingPost3p, eastTradingPost7p] = cardVariants(
  {
    id: 'eastTradingPost',
    name: 'East Trading Post',
    category: 'commercialStructures',
    phase: 'age1',
    reward: [
      transactionDiscountFor('glass', 'rightNeighbor'),
      transactionDiscountFor('loom', 'rightNeighbor'),
      transactionDiscountFor('papyrus', 'rightNeighbor'),
    ],
  },
  [3, 7] as const,
)

export const [westTradingPost3p, westTradingPost7p] = cardVariants(
  {
    id: 'westTradingPost',
    name: 'West Trading Post',
    category: 'commercialStructures',
    phase: 'age1',
    reward: [
      transactionDiscountFor('glass', 'leftNeighbor'),
      transactionDiscountFor('loom', 'leftNeighbor'),
      transactionDiscountFor('papyrus', 'leftNeighbor'),
    ],
  },
  [3, 7] as const,
)

export const [caravansery3p, caravansery5p, caravansery6p] = cardVariants(
  {
    id: 'caravansery',
    name: 'Caravansery',
    category: 'commercialStructures',
    phase: 'age2',
    cost: wood(2),
    chainFrom: 'marketplace',
    reward: oneOf(wood(1), stone(1), clay(1), ore(1)),
  },
  [3, 5, 6] as const,
)

export const [forum3p, forum6p, forum7p] = cardVariants(
  {
    id: 'forum',
    name: 'Forum',
    category: 'commercialStructures',
    phase: 'age2',
    cost: clay(2),
    chainFrom: ['eastTradingPost', 'westTradingPost'],
    reward: oneOf(glass(1), loom(1), papyrus(1)),
  },
  [3, 6, 7] as const,
)

export const [vineyard3p, vineyard6p] = cardVariants(
  {
    id: 'vineyard',
    name: 'Vineyard',
    category: 'commercialStructures',
    phase: 'age2',
    reward: coinPer('rawMaterials', 'neighborhood'),
  },
  [3, 6] as const,
)

export const [bazar4p, bazar7p] = cardVariants(
  {
    id: 'bazar',
    name: 'Bazar',
    category: 'commercialStructures',
    phase: 'age2',
    reward: coinPer('manufacturedGoods', 2, 'neighborhood'),
  },
  [4, 7] as const,
)

export const [haven3p, haven4p] = cardVariants(
  {
    id: 'haven',
    name: 'Haven',
    category: 'commercialStructures',
    phase: 'age3',
    cost: combine(wood(1), ore(1), loom(1)),
    chainFrom: 'forum',
    reward: [coinPer('rawMaterials'), pointPer('rawMaterials')],
  },
  [3, 4] as const,
)

export const [chamberOfCommerce4p, chamberOfCommerce6p] = cardVariants(
  {
    id: 'chamberOfCommerce',
    name: 'Chamber of Commerce',
    category: 'commercialStructures',
    phase: 'age3',
    cost: combine(clay(2), papyrus(1)),
    reward: [coinPer('manufacturedGoods', 2), pointPer('manufacturedGoods', 2)],
  },
  [4, 6] as const,
)

export const [lighthouse3p, lighthouse6p] = cardVariants(
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'commercialStructures',
    phase: 'age3',
    cost: combine(stone(1), glass(1)),
    chainFrom: 'caravansery',
    reward: [coinPer('commercialStructures'), pointPer('commercialStructures')],
  },
  [3, 6] as const,
)

export const [ludus5p, ludus7p] = cardVariants(
  {
    id: 'ludus',
    name: 'Ludus',
    category: 'commercialStructures',
    phase: 'age3',
    cost: combine(stone(1), ore(1)),
    reward: [coinPer('militaryStructures', 3), pointPer('militaryStructures')],
  },
  [5, 7] as const,
)

export const [arena3p, arena5p] = cardVariants(
  {
    id: 'arena',
    name: 'Arena',
    category: 'commercialStructures',
    phase: 'age3',
    cost: combine(stone(2), ore(1)),
    chainFrom: 'dispensary',
    reward: [coinPer('wonderStages', 3), pointPer('wonderStages')],
  },
  [3, 5] as const,
)
