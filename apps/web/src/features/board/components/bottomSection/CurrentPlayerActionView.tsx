import { IconDefinition, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faCalculator, faGear, faQuestion, faRotateForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnyCard, GamePhase, GameState, gameDirection } from 'seven-wonders-game'
import CurrentUserStateView from './CurrentUserStateView'

interface Props {
  gameState: GameState
  selectedCardId: AnyCard['id'] | undefined
  onClickSettings(): void
  onClickLeaderboard(): void
  onClickCard(cardId: AnyCard['id']): void
}

export default function CurrentPlayerActionView({
  gameState,
  selectedCardId,
  onClickSettings,
  onClickLeaderboard,
  onClickCard,
}: Props) {
  return (
    <div className="flex w-full flex-row items-end justify-between bg-green-100 pb-4">
      {/* settings */}
      <SettingsView numberOfDiscardedCards={gameState.discardedCards.length} onClickSettings={onClickSettings} />
      {/* current player */}
      <CurrentUserStateView {...{ gameState, selectedCardId, onClickCard }} />
      {/* scores */}
      <LeaderboardView currentPhase={gameState.phase} onClickLeaderboard={onClickLeaderboard} />
    </div>
  )
}

// Bottom sessions

const IconButton = ({ icon, onClick }: { icon: IconDefinition; onClick(): void }) => {
  return (
    <button onClick={onClick} className="h-12 w-12 rounded-full bg-emerald-600" style={{ border: '1px solid #ffd700' }}>
      <FontAwesomeIcon icon={icon} size="2x" color="#ffd700" />
    </button>
  )
}

const SettingsView = ({
  numberOfDiscardedCards,
  onClickSettings,
}: {
  numberOfDiscardedCards: number
  onClickSettings(): void
}) => {
  return (
    <div className="flex h-[200px] w-20 flex-col items-center gap-y-2 bg-green-800">
      <IconButton icon={faGear} onClick={onClickSettings} />
      {/* discard */}
      <div className="flex flex-row items-center gap-x-2">
        <FontAwesomeIcon icon={faFolder} size="2x" color="#ffd700" />
        <p className="text-lg font-bold text-white">{numberOfDiscardedCards}</p>
      </div>
    </div>
  )
}

const LeaderboardView = ({
  currentPhase,
  onClickLeaderboard,
}: {
  currentPhase: GamePhase
  onClickLeaderboard(): void
}) => {
  let currentPhaseText = ''
  switch (currentPhase) {
    case 'getLeaders':
      currentPhaseText = 'L'
      break
    case 'age1':
      currentPhaseText = 'I'
      break
    case 'age2':
      currentPhaseText = 'II'
      break
    case 'age3':
      currentPhaseText = 'III'
      break
  }
  const icon =
    gameDirection(currentPhase) === 'clockwise'
      ? faRotateForward
      : gameDirection(currentPhase) === 'counterclockwise'
      ? faRotateForward
      : faQuestion

  return (
    <div className="flex h-[200px] w-20 flex-col items-center gap-y-2 bg-green-800">
      <IconButton icon={faCalculator} onClick={onClickLeaderboard} />
      {/* current age */}
      <div className="flex flex-row items-center gap-x-2" style={{ color: '#ffd700', fontSize: 30 }}>
        {currentPhaseText} <FontAwesomeIcon icon={icon} color="#ffd700" />
      </div>
    </div>
  )
}
