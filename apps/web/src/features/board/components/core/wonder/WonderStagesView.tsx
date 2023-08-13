import classNames from 'classnames'
import { AnyCard, Resource, WonderStage } from 'seven-wonders-game'
import { getCostItemViews } from '../card/CardCostView'
import EffectView from '../effect/EffectView'

interface Props {
  stages: WonderStage[]
  builtStages: BuiltStages
  viewType: WonderStagesViewtype
}

type WonderStagesViewtype = 'currentUser' | 'preview'

type BuiltStages = {
  [wonderStageId in WonderStage['id']]: AnyCard['id']
}
export default function WonderStagesView({ stages, builtStages, viewType }: Props) {
  const hasBuilt = (stageId: string): boolean => {
    return builtStages[stageId] !== undefined
  }
  return (
    <div className={classNames('flex flex-1 flex-row', viewType === 'preview' ? 'gap-x-1' : 'gap-x-2')}>
      {stages.map((stage) => (
        <div
          key={stage.id}
          className={classNames(
            'flex items-center justify-center rounded-lg border border-yellow-500',
            viewType === 'preview' ? 'flex-shrink flex-grow py-2' : 'flex-1 p-2',
            hasBuilt(stage.id) ? 'bg-white' : 'bg-black',
          )}
          style={{ height: viewType === 'preview' ? 54 : 75, width: viewType === 'preview' ? undefined : 240 }}
        >
          {stage.effect && (
            <EffectView
              className="flex-1 items-center justify-center"
              {...{ effect: stage.effect, symbolSize: viewType === 'preview' ? 24 : 40 }}
            />
          )}
          {viewType === 'currentUser' && !hasBuilt(stage.id) && <StageCostView {...{ cost: stage.cost }} />}
        </div>
      ))}
    </div>
  )
}

// flexWrap: 'wrap' and alignItems: flex-start
const StageCostView = ({ cost }: { cost: Resource }) => {
  const symbolSize = 20
  return (
    <div className="flex flex-col flex-wrap items-center justify-start border-l pl-1" style={{ width: 48, height: 40 }}>
      {getCostItemViews(cost, symbolSize)}
    </div>
  )
}
