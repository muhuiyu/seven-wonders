import {
  CardReward,
  ResourceTypes,
  Reward,
  isMultipleRewards,
  isOneOfRewards,
  isSingleReward,
  isWildcardScience,
} from 'seven-wonders-game'
import ClayView from '../symbols/ClayView'
import CoinView from '../symbols/CoinView'
import GlassView from '../symbols/GlassView'
import LoomView from '../symbols/LoomView'
import OreView from '../symbols/OreView'
import PapyrusView from '../symbols/PapyrusView'
import StoneView from '../symbols/StoneView'
import WoodView from '../symbols/WoodView'

interface Props {
  reward: CardReward
}

export default function RewardView({ reward }: Props) {
  return <div className="w-fit">{renderRewardItems(reward)}</div>
}

const renderRewardItems = (reward: CardReward) => {
  if (isSingleReward(reward)) {
    return renderSingleReward(reward)
  } else if (isMultipleRewards(reward)) {
    return reward.map(renderSingleReward).map((view, index) => <div key={index}>{view}</div>)
  } else if (isOneOfRewards(reward)) {
    return (
      <div>
        {reward.oneOf.map(renderSingleReward).map((view, index) => {
          return (
            <div key={index}>
              {view}
              {index !== reward.oneOf.length - 1 && <div>or</div>}
            </div>
          )
        })}
      </div>
    )
  } else if (isWildcardScience(reward)) {
    return <div>wildcardscience</div>
  } else {
    return <div>?</div>
  }
}

function renderSingleReward(reward: Reward) {
  for (const resource of ResourceTypes) {
    if (!reward[resource]) continue
    switch (resource) {
      case 'coin':
        return <CoinView />
      case 'wood':
        return <WoodView />
      case 'stone':
        return <StoneView />
      case 'clay':
        return <ClayView />
      case 'ore':
        return <OreView />
      case 'glass':
        return <GlassView />
      case 'loom':
        return <LoomView />
      case 'papyrus':
        return <PapyrusView />
    }
  }
  if (reward.point) {
    return <div className="rounded-full border px-2 py-1">{reward.point}</div>
  } else if (reward.shield) {
    return <div>🛡️</div>
  } else if (reward.scienceMaths) {
    return <div>📐</div>
  } else if (reward.scienceEngineering) {
    return <div>⚙️</div>
  } else if (reward.scienceWriting) {
    return <div>✍🏻</div>
  } else if (reward.monetaryLoss) {
    return <div>-{reward.monetaryLoss}</div>
  } else if (reward.pointPer) {
    return (
      <div>
        {reward.pointPer.multiplier} point for per {reward.pointPer.countable} from{' '}
        {reward.pointPer.from
          .map((target) => {
            switch (target) {
              case 'leftNeighbor':
                return '<'
              case 'rightNeighbor':
                return '>'
              case 'self':
                '^'
            }
          })
          .join(', ')}
      </div>
    )
  } else if (reward.coinPer) {
    return (
      <div>
        {reward.coinPer.multiplier} coin for per {reward.coinPer.countable} from{' '}
        {reward.coinPer.from
          .map((target) => {
            switch (target) {
              case 'leftNeighbor':
                return '<'
              case 'rightNeighbor':
                return '>'
              case 'self':
                '^'
            }
          })
          .join(', ')}
      </div>
    )
  } else if (reward.transactionDiscountFor) {
    return (
      <div>
        -${reward.transactionDiscountFor.amount} for {reward.transactionDiscountFor.resourceType} from{' '}
        {reward.transactionDiscountFor.from
          .map((target) => {
            switch (target) {
              case 'leftNeighbor':
                return '<'
              case 'rightNeighbor':
                return '>'
              case 'self':
                '^'
            }
          })
          .join(', ')}
      </div>
    )
  } else if (reward.totalTransactionDiscount) {
    return <div>totalTD</div>
  }
  return null
}
