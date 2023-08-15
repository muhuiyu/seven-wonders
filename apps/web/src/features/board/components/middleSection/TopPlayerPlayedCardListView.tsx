import { AnyCard, GameState } from 'seven-wonders-game'
import CardView from '../core/card/CardView'
import InitialResourceView from './InitialResourceView'

interface Props {
  gameState: GameState
  userIndex: number
  topSectionPosition: number
  onClickCard: (Card: AnyCard) => void
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
        <InitialResourceView {...{ resource: userState.wonder.initialResource, symbolSize: 30 }} />
        {userState.playedCards.map((card) => (
          <CardView
            isShowingName={true}
            key={card.id}
            {...{ card, isPreview: true }}
            onClick={() => {
              onClickCard(card)
            }}
          />
        ))}
      </div>
    </div>
  )
}
