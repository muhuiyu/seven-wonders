import _ from 'lodash'
import { Resource } from 'seven-wonders-game'
import { RequirementView } from '../common/RequirementView'

interface Props {
  cost: Resource
}

export default function CardCostView({ cost }: Props) {
  const numberOfItems = _.sum(Object.values(cost))
  const symbolSize = numberOfItems > 5 ? 18 : 24
  return (
    <>
      {cost && (
        <div className="flex flex-col items-center justify-center">
          <RequirementView {...{ cost, symbolSize }} />
        </div>
      )}
    </>
  )
}
