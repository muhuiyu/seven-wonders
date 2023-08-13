import { Resource } from 'seven-wonders-game'
import {
  ClayView,
  CoinView,
  GlassView,
  LoomView,
  OreView,
  PapyrusView,
  StoneView,
  WoodView,
} from '../core/card/Symbols'

interface Props {
  resource: Resource
  symbolSize?: number
}

export default function InitialResourceView({ resource, symbolSize }: Props) {
  const size = symbolSize ?? 30
  let view = null
  if (resource.wood) {
    view = <WoodView size={size} />
  } else if (resource.clay) {
    view = <ClayView size={size} />
  } else if (resource.stone) {
    view = <StoneView size={size} />
  } else if (resource.ore) {
    view = <OreView size={size} />
  } else if (resource.glass) {
    view = <GlassView size={size} />
  } else if (resource.loom) {
    view = <LoomView size={size} />
  } else if (resource.papyrus) {
    view = <PapyrusView size={size} />
  } else if (resource.coin) {
    view = <CoinView amount={resource.coin} size={size} />
  }

  return <div className="bg-yellow-500 px-4">{view}</div>
}
