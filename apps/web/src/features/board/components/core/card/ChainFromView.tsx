import { AnyCard } from 'seven-wonders-game'

export const ChainFromView = ({
  cardId,
  backgroundColor,
}: {
  cardId: AnyCard['id'] | AnyCard['id'][]
  backgroundColor: string
}) => {
  return (
    <div
      className="ml-1 h-fit w-6 border-b border-l border-r border-black py-1 text-center"
      style={{ backgroundColor: backgroundColor }}
    >
      {/* TODO: get symbol by using card ID */}
      <div className="text-lg text-white">♪</div>
    </div>
  )
}
