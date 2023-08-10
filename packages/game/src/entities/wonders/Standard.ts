import { clay, coin, glass, loom, ore, papyrus, stone, wood } from '../definitions/Resource'
import { point, shield } from '../definitions/Reward'
import { wonder } from '../definitions/Wonder.ts'
import { combine } from '../utils/combine.ts'
import oneOf from '../utils/oneOf.ts'

//-------------------------------------------------------------------------------------------------
// WONDERS
//-------------------------------------------------------------------------------------------------

export const thePyramidsOfGiza = wonder({
  id: 'thePyramidsOfGiza',
  name: 'The Pyramids of Giza',
  day: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: combine(clay(2), loom(1)),
        rewards: point(5),
      },
      {
        cost: stone(4),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: stone(3),
        rewards: point(5),
      },
      {
        cost: clay(3),
        rewards: point(5),
      },
      {
        cost: combine(stone(4), papyrus(1)),
        rewards: point(7),
      },
    ],
  },
})

export const theLighthouseOfAlexandria = wonder({
  id: 'theLighthouseOfAlexandria',
  name: 'The Lighthouse of Alexandria',
  day: {
    initialResource: 'glass',
    stages: [
      {
        cost: stone(2),
        rewards: point(3),
      },
      {
        cost: ore(2),
        rewards: oneOf(wood(1), stone(1), ore(1), clay(1)),
      },
      {
        cost: combine(papyrus(1), loom(1)),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'glass',
    stages: [
      {
        cost: clay(2),
        rewards: oneOf(wood(1), stone(1), ore(1), clay(1)),
      },
      {
        cost: ore(3),
        rewards: oneOf(glass(1), papyrus(1), loom(1)),
      },
      {
        cost: wood(4),
        rewards: point(7),
      },
    ],
  },
})

export const theTempleOfArtemisInEphesus = wonder({
  id: 'theLighthouseOfAlexandria',
  name: 'The Temple of Artemis in Ephesus',
  day: {
    initialResource: 'papyrus',
    stages: [
      {
        cost: clay(2),
        rewards: point(3),
      },
      {
        cost: wood(2),
        rewards: coin(9),
      },
      {
        cost: combine(ore(2), glass(1)),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'papyrus',
    stages: [
      {
        cost: stone(2),
        rewards: combine(coin(4), point(2)),
      },
      {
        cost: wood(2),
        rewards: combine(coin(4), point(3)),
      },
      {
        cost: combine(ore(2), loom(1)),
        rewards: combine(coin(4), point(5)),
      },
    ],
  },
})

export const theColossusOfRhodes = wonder({
  id: 'theColossusOfRhodes',
  name: 'The Colossus of Rhodes',
  day: {
    initialResource: 'ore',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: clay(2),
        rewards: shield(2),
      },
      {
        cost: ore(4),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'ore',
    stages: [
      {
        cost: stone(3),
        rewards: combine(coin(3), point(3), shield(1)),
      },
      {
        cost: ore(4),
        rewards: combine(coin(4), point(4), shield(1)),
      },
    ],
  },
})

export const thePyramidsOfGiza2 = wonder({
  id: 'thePyramidsOfGiza2',
  name: 'The Pyramids of Giza 2',
  day: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: combine(clay(2), loom(1)),
        rewards: point(5),
      },
      {
        cost: stone(4),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: stone(3),
        rewards: point(5),
      },
      {
        cost: clay(3),
        rewards: point(5),
      },
      {
        cost: combine(stone(4), papyrus(1)),
        rewards: point(7),
      },
    ],
  },
})
export const thePyramidsOfGiza3 = wonder({
  id: 'thePyramidsOfGiza',
  name: 'The Pyramids of Giza 3',
  day: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: combine(clay(2), loom(1)),
        rewards: point(5),
      },
      {
        cost: stone(4),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: stone(3),
        rewards: point(5),
      },
      {
        cost: clay(3),
        rewards: point(5),
      },
      {
        cost: combine(stone(4), papyrus(1)),
        rewards: point(7),
      },
    ],
  },
})
export const thePyramidsOfGiza4 = wonder({
  id: 'thePyramidsOfGiza',
  name: 'The Pyramids of Giza 4',
  day: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: combine(clay(2), loom(1)),
        rewards: point(5),
      },
      {
        cost: stone(4),
        rewards: point(7),
      },
    ],
  },
  night: {
    initialResource: 'stone',
    stages: [
      {
        cost: wood(2),
        rewards: point(3),
      },
      {
        cost: stone(3),
        rewards: point(5),
      },
      {
        cost: clay(3),
        rewards: point(5),
      },
      {
        cost: combine(stone(4), papyrus(1)),
        rewards: point(7),
      },
    ],
  },
})
