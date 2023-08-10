import { ResourceType } from './Resource'
import { WonderStage } from './WonderStage'

type WonderId = string

// todo: change to wonder rewards?
interface Wonder {
  id: WonderId
  name: string
  day: WonderSide
  night: WonderSide
}

type WonderSide = {
  initialResource: ResourceType
  stages: WonderStage[]
}

function wonder(wonder: Wonder): Wonder {
  return wonder
}

export { wonder }
export type { WonderSide }
export default Wonder
