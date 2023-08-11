import _ from 'lodash'
import { Resource } from 'seven-wonders-game'
import { ClayView, CoinView, GlassView, LoomView, OreView, PapyrusView, StoneView, WoodView } from './Symbols'

interface Props {
  cost: Resource
}

export default function CostView({ cost }: Props) {
  console.log(cost)
  const numberOfItems = _.sum(Object.values(cost))
  const symbolSize = numberOfItems > 5 ? 18 : 24
  return (
    <>
      {cost && (
        <div className="flex flex-col items-center justify-center">
          {cost.coin && <CoinView amount={cost.coin} size={symbolSize} />}
          {cost.wood &&
            Array(cost.wood)
              .fill(null)
              .map((_, index) => <WoodView key={index} size={symbolSize} />)}
          {cost.stone &&
            Array(cost.stone)
              .fill(null)
              .map((_, index) => <StoneView key={index} size={symbolSize} />)}
          {cost.clay &&
            Array(cost.clay)
              .fill(null)
              .map((_, index) => <ClayView key={index} size={symbolSize} />)}
          {cost.ore &&
            Array(cost.ore)
              .fill(null)
              .map((_, index) => <OreView key={index} size={symbolSize} />)}
          {cost.glass &&
            Array(cost.glass)
              .fill(null)
              .map((_, index) => <GlassView key={index} size={symbolSize} />)}
          {cost.loom &&
            Array(cost.loom)
              .fill(null)
              .map((_, index) => <LoomView key={index} size={symbolSize} />)}
          {cost.papyrus &&
            Array(cost.papyrus)
              .fill(null)
              .map((_, index) => <PapyrusView key={index} size={symbolSize} />)}
        </div>
      )}
    </>
  )
}
