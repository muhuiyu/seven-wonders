import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { AnyCard, GameState, PlayerMove, PlayerMoveType } from 'seven-wonders-game'
import LeaderBoardView from '../../gameEnd/components/LeaderBoardView'
import ChooseMoveModal from '../ChooseActionModal'
import AdjustTransactionView from '../components/bottomSection/AdjustTransactionView'
import CurrentPlayerActionView from '../components/bottomSection/CurrentPlayerActionView'
import { CoinView } from '../components/core/card/Symbols'
import PlayedCardsView from '../components/middleSection/PlayedCardsView'
import TopPlayerPlayedCardListView from '../components/middleSection/TopPlayerPlayedCardListView'
import OtherPlayersView from '../components/topSection/OtherPlayersView'
interface Props {
  gameState: GameState
  onSelectPlayerMove(action: PlayerMove): void
}

export default function BoardScreen({ gameState, onSelectPlayerMove }: Props) {
  const [selectedCardId, setSelectedCardId] = useState<AnyCard['id'] | undefined>(undefined)
  const [isShowingChooseActionModal, setIsShowingChooseActionModal] = useState(false)
  const [isShowingAdjustTransactionModal, setIsShowingAdjustTransactionModal] = useState(false)
  const [legalMoveCandidates, setLegalMoveCandidates] = useState<PlayerMove[]>([])
  const [isShowingOtherPlayerPlayedCards, setIsShowingOtherPlayerPlayedCards] = useState(false)
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<
    { playerIndex: number; topSectionPosition: number } | undefined
  >(undefined)
  const [isShowingMonetarylossPanel, setIsShowingMonetarylossPanel] = useState(false)
  const [isShowingLeaderboard, setIsShowingLeaderboard] = useState(false)
  const [isShowingCardDescriptionView, setIsShowingCardDescriptionView] = useState(false)
  const [mousePosition, setMousePosition] = useState({})

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  const onClickOtherPlayerPlayedCard = (card: AnyCard) => {
    // TODO: show card description
    console.log('clicked on other player played card', card.id, 'mouse position is', mousePosition)
    setIsShowingCardDescriptionView(!isShowingCardDescriptionView)
  }

  const onClickCard = (cardId: AnyCard['id']) => {
    setSelectedCardId(cardId)
    setIsShowingChooseActionModal(true)
  }

  const legalMovesForCurrentCard = (): PlayerMove[] => {
    if (!selectedCardId) return []
    return gameState.legalMoves.filter((move) => move.cardId === selectedCardId)
  }

  const onClickCardAction = (moveType: PlayerMoveType) => {
    if (!selectedCardId) {
      return
    }
    const legalMoves = gameState.legalMoves.filter((move) => move.cardId === selectedCardId && move.type == moveType)

    if (!legalMoves) {
      console.log('no legal moves, must be some error...')
      return
    }

    setIsShowingChooseActionModal(false)
    if (legalMoves.length === 1) {
      onSelectPlayerMove(legalMoves[0])
      setLegalMoveCandidates([])
    } else {
      setIsShowingAdjustTransactionModal(true)
      setLegalMoveCandidates(legalMoves)
      console.log('available legal moves for card', selectedCardId, 'to perform', moveType, 'are', legalMoves)
      console.log('user needs to choose one')
    }
  }

  const onSelectLegalMove = (move: PlayerMove) => {
    setIsShowingAdjustTransactionModal(false)
    onSelectPlayerMove(move)
  }

  const onClickPlayer = (playerIndex: number, topSectionPosition: number) => {
    if (playerIndex === selectedPlayerIndex?.playerIndex) {
      setIsShowingOtherPlayerPlayedCards(false)
      setSelectedPlayerIndex(undefined)
    } else {
      setIsShowingOtherPlayerPlayedCards(true)
      setSelectedPlayerIndex({
        playerIndex,
        topSectionPosition,
      })
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
        {...{ onClickCard, selectedCardId, gameState }}
        onClickSettings={() => {
          // TODO: show settings
        }}
        onClickLeaderboard={() => {
          setIsShowingLeaderboard(true)
        }}
      />
      {isShowingChooseActionModal && selectedCardId && (
        <ChooseMoveModal
          legalMoves={legalMovesForCurrentCard()}
          cardId={selectedCardId}
          onClickMoveType={(moveType) => {
            onClickCardAction(moveType)
          }}
          onClickCancel={() => {
            setIsShowingChooseActionModal(false)
            setSelectedCardId(undefined)
          }}
        />
      )}
      {isShowingOtherPlayerPlayedCards && selectedPlayerIndex && (
        <TopPlayerPlayedCardListView
          className={classNames('absolute top-[130px]')}
          {...{
            gameState,
            userIndex: selectedPlayerIndex.playerIndex,
            topSectionPosition: selectedPlayerIndex.topSectionPosition,
            onClickCard: onClickOtherPlayerPlayedCard,
          }}
        />
      )}
      {isShowingAdjustTransactionModal && (
        <AdjustTransactionView
          {...{ gameState, legalMoveCandidates, onSelectLegalMove }}
          onClickCancel={() => {
            setIsShowingAdjustTransactionModal(false)
          }}
        />
      )}
      {isShowingMonetarylossPanel && (
        // TODO: finish this
        <div className="absolute flex w-1/2 flex-col items-center bg-violet-300">
          <div className="flex flex-row items-center gap-x-4">
            <div className="text-3xl">-</div>
            <div className="rounded-full bg-white text-3xl">-1</div>
            <CoinView amount={-2} size={60} />
            <div className="text-3xl">+</div>
          </div>
          <button className="w-[150px] border-2 border-teal-400 bg-orange-500 py-2 text-xl font-bold text-white">
            Accept
          </button>
        </div>
      )}
      {isShowingLeaderboard && (
        <div className="absolute h-4/5 w-4/5">
          <LeaderBoardView
            {...{
              gameState,
              buttonTitle: 'Close',
              onClickActionButton: () => {
                setIsShowingLeaderboard(false)
              },
            }}
          />
        </div>
      )}
    </div>
  )
}
