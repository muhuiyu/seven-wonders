import { AnyCard, GameState } from 'seven-wonders-game'
import CardView from '../core/card/CardView'
import InitialResourceView from './InitialResourceView'

interface Props {
  gameState: GameState
  userIndex: number
  onClickCard: (Card: AnyCard) => void
  className?: string
}

export default function OtherPlayerPlayeredCardsView({ gameState, userIndex, onClickCard, className }: Props) {
  const userState = gameState.players[userIndex]

  return (
    <div className={className}>
      <div className="flex flex-col bg-yellow-300" style={{ width: 200 }}>
        {userState.name}
        <div className="flex flex-row flex-wrap">
          <InitialResourceView {...{ resource: userState.wonder.initialResource, symbolSize: 30 }} />
          {userState.playedCards.map((card) => (
            <CardView
              key={card.id}
              {...{ card, isPreview: true }}
              onClick={() => {
                onClickCard(card)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
