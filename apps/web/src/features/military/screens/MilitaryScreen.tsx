import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GameState, Player, neighborIndexes } from 'seven-wonders-game'
import ageOneMilitaryToken from '../../../assets/symbols/ageOneMilitaryToken.png'
import { ShieldView } from '../../board/components/core/card/Symbols'

interface Props {
  gameState: GameState
  onClickGoToNextPhase(): void
}

export default function MilitaryScreen({ gameState, onClickGoToNextPhase }: Props) {
  const { leftIndex, rightIndex } = neighborIndexes(gameState.userIndex, gameState.players.length)

  return (
    <div className="flex h-full flex-col items-center bg-black">
      <div className="m-10 flex w-full flex-1 flex-col items-center justify-center bg-red-600">
        <div className="mt-8 flex w-2/3 flex-row items-end justify-between">
          <WonderNameAndShieldsView {...{ player: gameState.players[leftIndex] }} />
          <FontAwesomeIcon className="mb-2" icon={faCaretLeft} color="#fff" size="3x" />
          <WonderNameAndShieldsView {...{ player: gameState.players[gameState.userIndex] }} />
          <FontAwesomeIcon className="mb-2" icon={faCaretRight} color="#fff" size="3x" />
          <WonderNameAndShieldsView {...{ player: gameState.players[rightIndex] }} />
        </div>
        <div className="mt-8 flex w-2/3 flex-1 flex-row justify-between">
          <ResultView {...{ player: gameState.players[gameState.userIndex], neighbor: gameState.players[leftIndex] }} />
          <ResultView
            {...{ player: gameState.players[gameState.userIndex], neighbor: gameState.players[rightIndex] }}
          />
        </div>
        <button
          className="mb-12 w-[400px] rounded-xl border-4 border-amber-800 bg-yellow-500 py-4 text-3xl font-bold text-amber-800"
          onClick={onClickGoToNextPhase}
        >
          Next
        </button>
      </div>
    </div>
  )
}

const WonderNameAndShieldsView = ({ player }: { player: Player }) => {
  return (
    <div className="relative flex h-24 flex-col items-center justify-end gap-y-4">
      <div className="absolute top-0 flex items-center justify-center">
        <ShieldView size={48} />
        <h1 className="absolute text-center text-3xl font-black text-white" style={{ textShadow: '2px 2px 2px black' }}>
          {player.possession.shields}
        </h1>
      </div>
      <div className="w-[200px] rounded-xl border-2 border-yellow-500 bg-black p-3 text-center">
        <h1 className="text-xl font-semibold text-white">{player.wonder.shortName}</h1>
      </div>
    </div>
  )
}

const ResultView = ({ player, neighbor }: { player: Player; neighbor: Player }) => {
  const result: 'win' | 'lose' | 'draw' =
    player.possession.shields > neighbor.possession.shields
      ? 'win'
      : player.possession.shields === neighbor.possession.shields
      ? 'draw'
      : 'lose'
  return (
    <div className="flex h-4/5 w-[200px] flex-col items-center justify-center">
      <img src={ageOneMilitaryToken} width={120} />
      <div className="mt-6 text-4xl font-bold text-yellow-500" style={{ textShadow: '1px 1px 2px black' }}>
        {result}
      </div>
      <div className="text-white">against</div>
      <div className="text-4xl font-bold text-white">{neighbor.wonder.shortName}</div>
      <div className="text-white">{neighbor.name}</div>
    </div>
  )
}
