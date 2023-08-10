import _ from 'lodash'

const ResourceTypes = ['wood', 'stone', 'clay', 'ore', 'glass', 'loom', 'papyrus', 'coin'] as const

type ResourceType = (typeof ResourceTypes)[number]

type Resource = Partial<Record<ResourceType, number>>

const resourceBuilderFunctions = _.fromPairs(
  _.map(ResourceTypes, (type) => [type, (amount: number): Resource => ({ [type]: amount })]),
) as { [TResource in ResourceType]: <TAmount extends number>(n: TAmount) => { [TKey in TResource]: TAmount } }

export const { wood, stone, clay, ore, glass, loom, papyrus, coin } = resourceBuilderFunctions
export { ResourceTypes }
export type { ResourceType }
export default Resource
