import { AnyCard, GameState } from 'seven-wonders-game'
import CardView from '../core/card/CardView'
import InitialResourceView from './InitialResourceView'

interface Props {
  gameState: GameState
  userIndex: number
  onClickCard: (cardId: AnyCard['id']) => void
  className?: string
}

export default function NeighborPlayedCardsView({ gameState, userIndex, onClickCard, className }: Props) {
  const userState = gameState.players[userIndex]

  return (
    <div className={className}>
      <div className="flex flex-col" style={{ width: 240 }}>
        <div className="flex flex-row flex-wrap">
          {userState.initialResource && (
            <InitialResourceView {...{ resource: userState.initialResource, symbolSize: 32 }} />
          )}
          {userState.playedCards.map((cardId) => (
            <CardView
              key={cardId}
              {...{ cardId, isPreview: true }}
              onClick={() => {
                onClickCard(cardId)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
