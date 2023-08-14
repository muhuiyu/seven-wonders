import { useState } from 'react'
import { AnyCard, GameState, PlayerMove, PlayerMoveType } from 'seven-wonders-game'
import ChooseMoveModal from '../ChooseActionModal'
import CurrentPlayerActionView from '../components/bottomSection/CurrentPlayerActionView'
import { CoinView } from '../components/core/card/Symbols'
import OtherPlayerPlayeredCardsView from '../components/middleSection/OtherPlayerPlayeredCardsView'
import PlayedCardsView from '../components/middleSection/PlayedCardsView'
import OtherPlayersView from '../components/topSection/OtherPlayersView'
interface Props {
  gameState: GameState
  onSelectPlayerMove(action: PlayerMove): void
}

export default function BoardScreen({ gameState, onSelectPlayerMove }: Props) {
  const [selectedCard, setSelectedCard] = useState<AnyCard | undefined>(undefined)
  const [isShowingChooseActionModal, setIsShowingChooseActionModal] = useState(false)
  const [isShowingAdjustTransactionModal, setIsShowingAdjustTransactionModal] = useState(false)
  const [isShowingOtherPlayerPlayedCards, setIsShowingOtherPlayerPlayedCards] = useState(false)
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number | undefined>(undefined)

  const onClickCard = (card: AnyCard) => {
    setSelectedCard(card)
    setIsShowingChooseActionModal(true)
  }

  const legalMovesForCurrentCard = (): PlayerMove[] => {
    if (!selectedCard) return []
    return gameState.legalMoves.filter((move) => move.card.id === selectedCard.id)
  }

  const onClickCardAction = (moveType: PlayerMoveType) => {
    if (!selectedCard) {
      return
    }
    const legalMoves = gameState.legalMoves.filter((move) => move.card.id === selectedCard.id && move.type == moveType)

    if (!legalMoves) {
      console.log('no legal moves, must be some error...')
      return
    }

    setIsShowingChooseActionModal(false)
    if (legalMoves.length === 1) {
      onSelectPlayerMove(legalMoves[0])
    } else {
      setIsShowingAdjustTransactionModal(true)
      console.log('available legal moves for card', selectedCard.id, 'to perform', moveType, 'are', legalMoves)
      // user action: choose transaction amount and target, or use ability etc...
      console.log('user needs to choose one')
      // onSelectCard()
    }
  }

  const onClickPlayer = (playerIndex: number) => {
    console.log('did select', playerIndex)
    if (playerIndex === selectedPlayerIndex) {
      setIsShowingOtherPlayerPlayedCards(false)
      setSelectedPlayerIndex(undefined)
    } else {
      setIsShowingOtherPlayerPlayedCards(true)
      setSelectedPlayerIndex(playerIndex)
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* top: other players */}
      <OtherPlayersView {...{ gameState, onClickPlayer }} />
      {/* middle: left neighbor + my played cards + right neighbor */}
      <PlayedCardsView {...{ gameState }} />
      {/* bottom: hand cards and other actions */}
      <CurrentPlayerActionView
        {...{ gameState, selectedCard, onClickCard }}
        onClickSettings={() => {
          // TODO:
        }}
        onClickLeaderboard={() => {
          // TODO:
          gameState.players.forEach((player) => {
            console.log(player.victoryPoints)
          })
        }}
      />
      {isShowingChooseActionModal && selectedCard && (
        <ChooseMoveModal
          legalMoves={legalMovesForCurrentCard()}
          card={selectedCard}
          onClickMoveType={(moveType) => {
            onClickCardAction(moveType)
          }}
          onClickCancel={() => {
            setIsShowingChooseActionModal(false)
            setSelectedCard(undefined)
          }}
        />
      )}
      {isShowingOtherPlayerPlayedCards && selectedPlayerIndex && (
        <OtherPlayerPlayeredCardsView
          className="absolute"
          {...{ gameState, userIndex: selectedPlayerIndex, onClickCard }}
        />
      )}
      {isShowingAdjustTransactionModal && (
        <div className="absolute flex h-1/3 w-1/4 flex-col items-center bg-red-300 p-4">
          <h1 className="text-xl font-bold">Choose transaction</h1>
          <div className="my-8 flex w-full flex-1 flex-row items-center justify-between">
            <div className="relative flex h-full flex-1 items-center justify-center bg-teal-400">
              <CoinView amount={1} size={40} />
              <button>+</button>
            </div>
            <div className="h-full flex-1 bg-zinc-400"></div>
            <div className="relative flex h-full flex-1 items-center justify-center bg-lime-400">
              <CoinView amount={1} size={40} />
              <button>+</button>
            </div>
          </div>
          <button className="w-[150px] border-2 border-teal-400 bg-orange-500 py-2 text-xl font-bold text-white">
            Next
          </button>
        </div>
      )}
    </div>
  )
}
