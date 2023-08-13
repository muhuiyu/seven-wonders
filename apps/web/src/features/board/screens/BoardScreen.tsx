import { useState } from 'react'
import { AnyCard, GameState, PlayerMove, PlayerMoveType } from 'seven-wonders-game'
import ChooseMoveModal from '../ChooseActionModal'
import CurrentPlayerActionView from '../components/bottomSection/CurrentPlayerActionView'
import OtherPlayerPlayeredCardsView from '../components/middleSection/OtherPlayerPlayeredCardsView'
import PlayedCardsView from '../components/middleSection/PlayedCardsView'
import OtherPlayersView from '../components/topSection/OtherPlayersView'
interface Props {
  gameState: GameState
  onSelectCard(action: PlayerMove): void
}

export default function BoardScreen({ gameState, onSelectCard }: Props) {
  const [selectedCard, setSelectedCard] = useState<AnyCard | undefined>(undefined)
  const [isShowingChooseActionModal, setIsShowingChooseActionModal] = useState(false)
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

    if (legalMoves.length === 1) {
      onSelectCard(legalMoves[0])
      setIsShowingChooseActionModal(false)
    } else {
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
    </div>
  )
}
