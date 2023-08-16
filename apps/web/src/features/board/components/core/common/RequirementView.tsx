import { Resource } from 'seven-wonders-game'
import { ClayView, CoinView, GlassView, LoomView, OreView, PapyrusView, StoneView, WoodView } from '../card/Symbols'

interface Props {
  cost: Resource
  symbolSize: number
}

export function RequirementView({ cost, symbolSize }: Props): JSX.Element[] {
  const views: JSX.Element[] = []

  if (cost.coin) {
    views.push(<CoinView key="coin" amount={cost.coin} size={symbolSize} />)
  }
  if (cost.wood) {
    Array(cost.wood)
      .fill(null)
      .forEach((_, index) => {
        views.push(<WoodView key={`wood-${index}`} size={symbolSize} />)
      })
  }
  if (cost.stone) {
    Array(cost.stone)
      .fill(null)
      .forEach((_, index) => {
        views.push(<StoneView key={`stone-${index}`} size={symbolSize} />)
      })
  }
  if (cost.clay) {
    Array(cost.clay)
      .fill(null)
      .forEach((_, index) => {
        views.push(<ClayView key={`clay-${index}`} size={symbolSize} />)
      })
  }
  if (cost.ore) {
    Array(cost.ore)
      .fill(null)
      .forEach((_, index) => {
        views.push(<OreView key={`ore-${index}`} size={symbolSize} />)
      })
  }
  if (cost.glass) {
    Array(cost.glass)
      .fill(null)
      .forEach((_, index) => {
        views.push(<GlassView key={`glass-${index}`} size={symbolSize} />)
      })
  }
  if (cost.loom) {
    Array(cost.loom)
      .fill(null)
      .forEach((_, index) => {
        views.push(<LoomView key={`loom-${index}`} size={symbolSize} />)
      })
  }
  if (cost.papyrus) {
    Array(cost.papyrus)
      .fill(null)
      .forEach((_, index) => {
        views.push(<PapyrusView key={`papyrus-${index}`} size={symbolSize} />)
      })
  }

  return views
}
