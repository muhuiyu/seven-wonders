import { Wonder, WonderSide } from 'seven-wonders-game'
import CostView from '../card/CostView'

interface Props {
  wonder: Wonder
}

export default function WonderView({ wonder }: Props) {
  return (
    <div className="flex flex-col p-4">
      <h2 className="">{wonder.name}</h2>
      <WonderCostView {...{ wonderSide: wonder.day }} />
      <WonderCostView {...{ wonderSide: wonder.night }} />
    </div>
  )
}

const WonderCostView = ({ wonderSide }: { wonderSide: WonderSide }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        init<h2 className="ml-2">{wonderSide.initialResource}</h2>
      </div>
      <div className="flex flex-row gap-x-6">
        {wonderSide.stages.map((stage, index) => {
          return (
            <div key={index} className="flex flex-row">
              <div>{index}.</div>
              {stage.cost && <CostView {...{ cost: stage.cost }} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
