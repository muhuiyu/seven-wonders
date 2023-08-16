import { AnyCard, GameState } from 'seven-wonders-game'
import CardView from '../core/card/CardView'
import InitialResourceView from './InitialResourceView'

interface Props {
  gameState: GameState
  userIndex: number
  topSectionPosition: number
  onClickCard: (CardId: AnyCard['id']) => void
  className?: string
}

export default function TopPlayerPlayedCardListView({
  gameState,
  userIndex,
  topSectionPosition,
  onClickCard,
  className,
}: Props) {
  const userState = gameState.players[userIndex]

  return (
    <div className={className} style={{ left: `${(topSectionPosition * 100) / (gameState.players.length - 1)}vw` }}>
      <div className="flex flex-col bg-black">
        {userState.initialResource && (
          <InitialResourceView {...{ resource: userState.initialResource, symbolSize: 32 }} />
        )}
        {userState.playedCards.map((cardId) => (
          <CardView
            isShowingName={true}
            key={cardId}
            {...{ cardId, isPreview: true }}
            onClick={() => {
              onClickCard(cardId)
            }}
          />
        ))}
      </div>
    </div>
  )
}
