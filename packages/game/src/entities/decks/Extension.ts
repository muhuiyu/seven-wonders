import { card } from '../definitions/Card'
import { clay, coin, glass, loom, ore, papyrus, stone, wood } from '../definitions/Resource'
import { monetaryLoss, point, shield } from '../definitions/Reward'
import { combine } from '../utils/combine'

//-------------------------------------------------------------------------------------------------
// CITIES
//-------------------------------------------------------------------------------------------------

export const pigeonLoft = card({
  id: 'pigeonLoft',
  name: 'Pigeon Loft',
  category: 'cities',
  phase: 'age1',
  cost: combine(coin(1), ore(1)),
  reward: 'copyNeighborScience',
})

export const spyRing = card({
  id: 'spyRing',
  name: 'Spy Ring',
  category: 'cities',
  phase: 'age2',
  cost: combine(coin(2), stone(1), clay(1)),
  reward: 'copyNeighborScience',
})

export const tortureChamber = card({
  id: 'tortureChamber',
  name: 'Torture Chamber',
  category: 'cities',
  phase: 'age3',
  cost: combine(coin(3), ore(2), glass(1)),
  reward: 'copyNeighborScience',
})

export const militia = card({
  id: 'militia',
  name: 'Militia',
  category: 'cities',
  phase: 'age1',
  cost: coin(3),
  reward: shield(2),
})

export const mercenaries = card({
  id: 'mercenaries',
  name: 'Mercenaries',
  category: 'cities',
  phase: 'age2',
  cost: combine(coin(4), papyrus(1)),
  reward: shield(3),
})

export const contingent = card({
  id: 'contingent',
  name: 'Contingent',
  category: 'cities',
  phase: 'age3',
  cost: combine(coin(5), loom(1)),
  reward: shield(5),
})

export const hideout = card({
  id: 'hideout',
  name: 'Hideout',
  category: 'cities',
  phase: 'age1',
  reward: [point(2), monetaryLoss(1)],
})

export const lair = card({
  id: 'lair',
  name: 'Lair',
  category: 'cities',
  phase: 'age2',
  cost: combine(wood(1), glass(1)),
  reward: [point(3), monetaryLoss(2)],
})

export const brotherhood = card({
  id: 'brotherhood',
  name: 'Brotherhood',
  category: 'cities',
  phase: 'age3',
  cost: combine(wood(2), ore(1), loom(1)),
  reward: [point(4), monetaryLoss(3)],
})

// Add diplomacy and beyond
