import { GameState, VictoryPoints } from 'seven-wonders-game'
import alexandriaDayBackground from '../../../assets/wonders/alexandria-day.png'
import alexandriaNightBackground from '../../../assets/wonders/alexandria-night.png'
import babylonDayBackground from '../../../assets/wonders/babylon-day.png'
import babylonNightBackground from '../../../assets/wonders/babylon-night.png'
import ephesusDayBackground from '../../../assets/wonders/ephesus-day.png'
import ephesusNightBackground from '../../../assets/wonders/ephesus-night.png'
import gizaDayBackground from '../../../assets/wonders/giza-day.png'
import gizaNightBackground from '../../../assets/wonders/giza-night.png'
import halikarnassosDayBackground from '../../../assets/wonders/halikarnassos-day.png'
import halikarnassosNightBackground from '../../../assets/wonders/halikarnassos-night.png'
import olympiaDayBackground from '../../../assets/wonders/olympia-day.png'
import olympiaNightBackground from '../../../assets/wonders/olympia-night.png'
import rhodesDayBackground from '../../../assets/wonders/rhodes-day.png'
import rhodesNightBackground from '../../../assets/wonders/rhodes-night.png'
import { CoinView } from '../../board/components/core/card/Symbols'

interface Props {
  gameState: GameState
  onClickActionButton: () => void
  buttonTitle: string
}

export default function LeaderBoardView({ onClickActionButton, gameState, buttonTitle }: Props) {
  const allPoints = (points: VictoryPoints) => {
    return (
      points.military +
      points.coin +
      points.wonderStages +
      points.civilianStructures +
      points.commercialStructures +
      points.guilds +
      points.scientificStructures +
      points.leaders +
      points.cities
    )
  }

  const currentUserWonderImageName =
    gameState.players[gameState.userIndex].wonder.sides[gameState.players[gameState.userIndex].wonderSideIndex]
      .imageName

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${wonderSideImageNameToUrlDictionary[currentUserWonderImageName]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute h-full w-full bg-black opacity-50"></div>
      <div className="relative flex flex-col gap-y-1 bg-yellow-200">
        {gameState.currentPoints
          .map((points, index) => ({ playerIndex: index, points: points }))
          .sort((a, b) => allPoints(b.points) - allPoints(a.points))
          .map(({ playerIndex, points }) => (
            <div className="flex flex-row gap-x-1" key={playerIndex}>
              <div className="flex w-[240px] flex-col items-center justify-center bg-teal-900">
                <h2 className="text-xl font-bold text-white">{gameState.players[playerIndex].name}</h2>
                <div className="text-sm font-medium text-white">{gameState.players[playerIndex].wonder.shortName}</div>
              </div>
              <div className="w-[80px] border-b-8 border-red-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.military}
              </div>
              <div className="flex w-[80px] items-center justify-center border-b-8 border-amber-500  bg-teal-900">
                <CoinView amount={points.coin} size={42} />
              </div>
              <div className="w-[80px] border-b-8 border-amber-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.wonderStages}
                {/* <FontAwesomeIcon icon={faTriangleExclamation} /> */}
              </div>
              <div className="w-[80px] border-b-8 border-blue-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.civilianStructures}
              </div>
              <div className="w-[80px] border-b-8 border-yellow-500 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.commercialStructures}
              </div>
              <div className="w-[80px] border-b-8 border-purple-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.guilds}
              </div>
              <div className="w-[80px] border-b-8 border-green-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.scientificStructures}
              </div>
              <div className="w-[80px] border-b-8 border-white bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.leaders}
              </div>
              <div className="w-[80px] border-b-8 border-black bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {points.cities}
              </div>
              <div className="w-[80px] border-b-8 border-orange-600 bg-teal-900 pb-3 pt-4 text-center text-3xl font-bold text-white">
                {allPoints(points)}
              </div>
            </div>
          ))}
      </div>
      <button
        className="relative mt-16 w-[300px] rounded-sm border-4 border-yellow-300 bg-teal-800 py-4 text-xl font-bold text-yellow-200"
        onClick={onClickActionButton}
      >
        {buttonTitle}
      </button>
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
  'babylon-day.png': babylonDayBackground,
  'babylon-night.png': babylonNightBackground,
  'halikarnassos-day.png': halikarnassosDayBackground,
  'halikarnassos-night.png': halikarnassosNightBackground,
  'olympia-day.png': olympiaDayBackground,
  'olympia-night.png': olympiaNightBackground,
}
