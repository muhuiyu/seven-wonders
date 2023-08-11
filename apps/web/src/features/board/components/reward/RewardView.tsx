import {
  CardReward,
  ResourceTypes,
  Reward,
  isMultipleRewards,
  isOneOfRewards,
  isSingleReward,
  isWildcardScience,
} from 'seven-wonders-game'
import {
  ClayView,
  CoinView,
  CompassView,
  GearView,
  GlassView,
  LoomView,
  OreView,
  PapyrusView,
  PointView,
  SeparatorView,
  ShieldView,
  StoneView,
  TabletView,
  WoodView,
} from '../card/Symbols'

interface Props {
  reward: CardReward
}

export default function RewardView({ reward }: Props) {
  return <div className="w-fit">{renderRewardItems(reward)}</div>
}

const renderRewardItems = (reward: CardReward) => {
  const defaultSymbolSize = 40

  if (isSingleReward(reward)) {
    return renderSingleReward(reward, defaultSymbolSize)
  } else if (isMultipleRewards(reward)) {
    const symbolSize = reward.length > 2 ? defaultSymbolSize * 0.8 : defaultSymbolSize
    return (
      <div className="flex flex-row">
        {reward
          .map((item) => renderSingleReward(item, symbolSize))
          .map((view, index) => (
            <div key={index}>{view}</div>
          ))}
      </div>
    )
  } else if (isOneOfRewards(reward)) {
    let symbolSize = defaultSymbolSize
    switch (reward.oneOf.length) {
      case 3:
        symbolSize = defaultSymbolSize * 0.75
        break
      case 4:
        symbolSize = defaultSymbolSize * 0.6
        break
    }

    const views: JSX.Element[] = []
    reward.oneOf.forEach((item, index) => {
      const view = renderSingleReward(item, symbolSize)
      if (view) views.push(view)
      if (index < reward.oneOf.length - 1) {
        views.push(<SeparatorView size={symbolSize} />)
      }
    })

    return <div className="flex flex-row">{views}</div>
  } else if (isWildcardScience(reward)) {
    return <div>wildcardscience</div>
  } else {
    return <div>?</div>
  }
}

function renderSingleReward(reward: Reward, symbolSize: number) {
  for (const resource of ResourceTypes) {
    if (!reward[resource]) continue
    switch (resource) {
      case 'coin':
        return <CoinView amount={reward.coin!} size={symbolSize} />
      case 'wood':
        return <WoodView size={symbolSize} />
      case 'stone':
        return <StoneView size={symbolSize} />
      case 'clay':
        return <ClayView size={symbolSize} />
      case 'ore':
        return <OreView size={symbolSize} />
      case 'glass':
        return <GlassView size={symbolSize} />
      case 'loom':
        return <LoomView size={symbolSize} />
      case 'papyrus':
        return <PapyrusView size={symbolSize} />
    }
  }
  if (reward.point) {
    return <PointView amount={reward.point} size={symbolSize} />
  } else if (reward.shield) {
    if (reward.shield > 3) {
      // need to go second line
      return (
        <div className="flex flex-row">
          {Array(reward.shield)
            .fill(null)
            .map((_, index) => (
              <ShieldView key={index} size={symbolSize * 0.7} />
            ))}
        </div>
      )
    } else {
      return (
        <div className="flex flex-row">
          {Array(reward.shield)
            .fill(null)
            .map((_, index) => (
              <ShieldView key={index} size={symbolSize} />
            ))}
        </div>
      )
    }
  } else if (reward.scienceMaths) {
    return <CompassView size={symbolSize} />
  } else if (reward.scienceEngineering) {
    return <GearView size={symbolSize} />
  } else if (reward.scienceWriting) {
    return <TabletView size={symbolSize} />
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
