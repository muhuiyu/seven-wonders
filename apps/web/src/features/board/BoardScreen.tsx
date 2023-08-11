import { useState } from 'react'
import { AnyCard, GameState, Player, PlayerAction } from 'seven-wonders-game'
import CardView from './components/card/CardView'

interface Props {
  gameState: GameState
  onSelectCard(cardId: AnyCard['id'], action: PlayerAction): void
}

export default function BoardScreen({ gameState, onSelectCard }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [isShowingCardActionList, setIsShowingCardActionList] = useState(false)

  const onSelectCardForAction = (cardId: AnyCard['id']) => {
    setSelectedCardId(cardId)
    console.log('choose action')
    setIsShowingCardActionList(true)
  }

  // TODO: make card looks bigger?
  const onClickPlayerCard = (playerId: string, cardId: AnyCard['id']) => {
    console.log('will zoom in card', cardId)
  }

  return (
    <>
      <div className="p-4">
        <header className="App-header">
          <h1 className="text-2xl">7 Wonders: {gameState.id}</h1>
        </header>
        <div className="my-4 flex flex-row gap-x-6">
          <div className="flex-1">
            <div className="mb-4 text-2xl">Player list</div>
            <div className="my-4">Current: {gameState.phase}</div>
            <div className="flex flex-col gap-y-4">
              {gameState.players.map((player) => (
                <PlayerSessionView key={player.id} {...{ player, onClickPlayerCard }} />
              ))}
              {/* <PlayerSessionView {...{ player: getCurrentPlayerSession(currentPlayerId), onSelectCard }} /> */}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-lg font-bold">My hand cards</div>
            <div className="flex flex-row gap-x-2">
              {gameState.handCards.map((card) => (
                <CardView
                  key={card.id}
                  {...{ card }}
                  onClick={() => {
                    onSelectCardForAction(card.id)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {isShowingCardActionList && (
        <div
          className="bg-yellow-500"
          onClick={() => {
            // TODO: add list
            if (selectedCardId) onSelectCard(selectedCardId, 'play')
          }}
        >
          acitons to choose: play, discard, build
        </div>
      )}
    </>
  )
}
const PlayerSessionView = ({
  player,
  onClickPlayerCard,
}: {
  player: Player
  onClickPlayerCard(playerId: string, cardId: AnyCard['id']): void
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-base font-bold">{player.name}</div>
      <div className="">[Wonder] {player.wonder.name}</div>
      <div className="flex flex-row gap-x-2">
        {player.playedCards.map((card) => (
          <CardView
            key={card.id}
            {...{ card }}
            onClick={() => {
              onClickPlayerCard(player.id, card.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}
