import { AnyCard, Requirement, Resource } from 'seven-wonders-game'

const getResource = (requirements: Requirement[]): Resource | undefined => {
  if (!requirements) {
    return undefined
  }
  for (const requirement of requirements) {
    if (requirement.type === 'resource') {
      return requirement.resource
    }
  }
}

const getChainFrom = (requirements: Requirement[]): AnyCard['id'] | undefined => {
  if (!requirements) {
    return undefined
  }
  for (const requirement of requirements) {
    if (requirement.type === 'chain') {
      return requirement.cardId
    }
  }
}

export { getChainFrom, getResource }
