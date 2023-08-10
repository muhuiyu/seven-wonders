import { OneOf } from '../utils/oneOf'
import Reward from './Reward'

type CardReward = Reward | OneOf<Reward[]> | Reward[] | 'wildcardScience' | 'copyNeighborScience'

function isSingleReward(reward: CardReward): reward is Reward {
  return typeof reward === 'object' && !Array.isArray(reward) && !('oneOf' in reward)
}

function isOneOfRewards(reward: CardReward): reward is OneOf<Reward[]> {
  return typeof reward === 'object' && 'oneOf' in reward
}

function isMultipleRewards(reward: CardReward): reward is Reward[] {
  return Array.isArray(reward)
}

function isWildcardScience(reward: CardReward): reward is 'wildcardScience' {
  return reward === 'wildcardScience'
}

function isCopyNeighborScience(reward: CardReward): reward is 'copyNeighborScience' {
  return reward === 'copyNeighborScience'
}

export { isCopyNeighborScience, isMultipleRewards, isOneOfRewards, isSingleReward, isWildcardScience }
export default CardReward
