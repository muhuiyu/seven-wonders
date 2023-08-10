import Resource from './Resource'
import WonderReward from './WonderReward'

export interface WonderStage {
  cost: Resource
  rewards: WonderReward
}
