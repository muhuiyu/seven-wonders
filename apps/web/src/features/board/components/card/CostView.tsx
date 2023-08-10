import { Resource } from 'seven-wonders-game'
import ClayView from '../symbols/ClayView'
import GlassView from '../symbols/GlassView'
import LoomView from '../symbols/LoomView'
import OreView from '../symbols/OreView'
import PapyrusView from '../symbols/PapyrusView'
import StoneView from '../symbols/StoneView'
import WoodView from '../symbols/WoodView'

interface Props {
  cost: Resource
}

export default function CostView({ cost }: Props) {
  return (
    <>
      {cost && (
        <div className="flex flex-row">
          [cost]
          {cost.wood &&
            Array(cost.wood)
              .fill(null)
              .map((_, index) => <WoodView key={index} />)}
          {cost.stone &&
            Array(cost.stone)
              .fill(null)
              .map((_, index) => <StoneView key={index} />)}
          {cost.clay &&
            Array(cost.clay)
              .fill(null)
              .map((_, index) => <ClayView key={index} />)}
          {cost.ore &&
            Array(cost.ore)
              .fill(null)
              .map((_, index) => <OreView key={index} />)}
          {cost.glass &&
            Array(cost.glass)
              .fill(null)
              .map((_, index) => <GlassView key={index} />)}
          {cost.loom &&
            Array(cost.loom)
              .fill(null)
              .map((_, index) => <LoomView key={index} />)}
          {cost.papyrus &&
            Array(cost.papyrus)
              .fill(null)
              .map((_, index) => <PapyrusView key={index} />)}
        </div>
      )}
    </>
  )
}
