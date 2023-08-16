import classNames from 'classnames'
import _ from 'lodash'
import { AnyCard, PlayerMove, PlayerMoveType, findCard } from 'seven-wonders-game'

interface Props {
  legalMoves: PlayerMove[]
  cardId: AnyCard['id']
  onClickMoveType(moveType: PlayerMoveType): void
  onClickCancel(): void
}

export default function ChooseMoveModal({ legalMoves, cardId, onClickMoveType, onClickCancel }: Props) {
  const card = findCard(cardId)
  if (!card) {
    return null
  }
  return (
    <div className="absolute flex flex-col items-center bg-red-500 px-10 py-4">
      <h3 className="text-lg font-bold">Choose action</h3>
      <p>For {card.name}</p>
      <div className="mt-8 flex flex-row">
        <PlayerMoveButton
          title="Play"
          icon="✅"
          disabled={!_.some(legalMoves, (move) => move.type === 'play')}
          onClick={() => {
            onClickMoveType('play')
          }}
        />
        <PlayerMoveButton
          title="Build"
          icon="⛏️"
          disabled={!_.some(legalMoves, (move) => move.type === 'build')}
          onClick={() => {
            onClickMoveType('build')
          }}
        />
        <PlayerMoveButton
          title="Discard"
          icon="❌"
          disabled={!_.some(legalMoves, (move) => move.type === 'discard')}
          onClick={() => {
            onClickMoveType('discard')
          }}
        />
      </div>
      <button className="mt-8" onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  )
}

const PlayerMoveButton = ({
  title,
  icon,
  onClick,
  disabled,
}: {
  title: string
  icon: string
  onClick(): void
  disabled: boolean
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(disabled && 'opacity-20', 'flex flex-col items-center gap-y-2')}
      style={{ width: 60 }}
      disabled={disabled}
    >
      <div className="flex h-10 w-10 items-center justify-center bg-yellow-400 text-center">{icon}</div>
      <div className="text-xs">{title}</div>
    </button>
  )
}
