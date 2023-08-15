import { GameState, Player, PlayerMove, neighborIndexes } from 'seven-wonders-game'
import alexandriaDayBackground from '../../../../assets/wonders/alexandria-day.png'
import alexandriaNightBackground from '../../../../assets/wonders/alexandria-night.png'
import ephesusDayBackground from '../../../../assets/wonders/ephesus-day.png'
import ephesusNightBackground from '../../../../assets/wonders/ephesus-night.png'
import gizaDayBackground from '../../../../assets/wonders/giza-day.png'
import gizaNightBackground from '../../../../assets/wonders/giza-night.png'
import rhodesDayBackground from '../../../../assets/wonders/rhodes-day.png'
import rhodesNightBackground from '../../../../assets/wonders/rhodes-night.png'
import { CoinView } from '../core/card/Symbols'

interface Props {
  gameState: GameState
  legalMoveCandidates: PlayerMove[]
  onSelectLegalMove(move: PlayerMove): void
  onClickCancel(): void
}

export default function AdjustTransactionView({
  gameState,
  legalMoveCandidates,
  onSelectLegalMove,
  onClickCancel,
}: Props) {
  const { leftIndex, rightIndex } = neighborIndexes(gameState.userIndex, gameState.players.length)
  return (
    <div className="absolute flex flex-col items-center bg-red-300 p-4">
      <h1 className="flex text-xl font-bold">Choose transaction</h1>
      <div className="flex flex-row gap-x-8">
        {legalMoveCandidates.map((move, index) => (
          <div
            key={index}
            className="my-8 flex w-full flex-1 flex-row items-center justify-between gap-x-1 border-4 border-yellow-400 bg-yellow-400"
            onClick={() => {
              onSelectLegalMove(move)
            }}
          >
            <WonderView
              {...{ player: gameState.players[leftIndex], transactionAmount: move.playerTransactions[leftIndex] }}
            />
            <WonderView {...{ player: gameState.players[gameState.userIndex], transactionAmount: 0 }} />
            <WonderView
              {...{ player: gameState.players[rightIndex], transactionAmount: move.playerTransactions[rightIndex] }}
            />
          </div>
        ))}
      </div>
      <button className="mt-8" onClick={onClickCancel}>
        Cancel
      </button>
    </div>
  )
}

const WonderView = ({ player, transactionAmount }: { player: Player; transactionAmount: number }) => {
  return (
    <div
      className="relative"
      style={{
        height: 150,
        width: 80,
        backgroundImage: `url(${
          wonderSideImageNameToUrlDictionary[player.wonder.sides[player.wonderSideIndex].imageName]
        })`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {transactionAmount > 0 && (
        <div className="flex flex-row justify-center">
          <CoinView amount={transactionAmount} size={40} />
        </div>
      )}
    </div>
  )
}

const wonderSideImageNameToUrlDictionary: Record<string, string> = {
  'alexandria-day.png': alexandriaDayBackground,
  'alexandria-night.png': alexandriaNightBackground,
  'ephesus-day.png': ephesusDayBackground,
  'ephesus-night.png': ephesusNightBackground,
  'giza-day.png': gizaDayBackground,
  'giza-night.png': gizaNightBackground,
  'rhodes-day.png': rhodesDayBackground,
  'rhodes-night.png': rhodesNightBackground,
}
