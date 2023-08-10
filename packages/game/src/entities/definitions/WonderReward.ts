import { OneOf } from '../utils/oneOf'
import Reward from './Reward'

type WonderReward = Reward | OneOf<Reward[]> | Reward[] | FreeCardRewards
export default WonderReward

// do it later...
type FreeCardRewards = 'newColor' | 'firstCard' | 'lastCard'
