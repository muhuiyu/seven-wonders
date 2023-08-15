import { GameState } from 'seven-wonders-game'
import alexandriaDayBackground from '../../../../assets/wonders/alexandria-day.png'
import alexandriaNightBackground from '../../../../assets/wonders/alexandria-night.png'
import ephesusDayBackground from '../../../../assets/wonders/ephesus-day.png'
import ephesusNightBackground from '../../../../assets/wonders/ephesus-night.png'
import gizaDayBackground from '../../../../assets/wonders/giza-day.png'
import gizaNightBackground from '../../../../assets/wonders/giza-night.png'
import rhodesDayBackground from '../../../../assets/wonders/rhodes-day.png'
import rhodesNightBackground from '../../../../assets/wonders/rhodes-night.png'
import TotalCoinsView from '../bottomSection/TotalCoinsView'
import TotalShieldsView from '../bottomSection/TotalShieldsView'
import WonderStagesView from '../core/wonder/WonderStagesView'

interface Props {
  gameState: GameState
  onClickPlayer(playerIndex: number, topSectionPosition: number): void
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

export default function OtherPlayersView({ gameState, onClickPlayer }: Props) {
  return (
    <div className="flex w-full flex-row justify-evenly">
      {gameState.players
        .filter((_player, index) => index !== gameState.userIndex) // filter other players
        .map((player, index) => {
          const wonderSide = player.wonder.sides[player.wonderSideIndex]
          return (
            <div
              key={index}
              className="flex flex-1 flex-col items-center"
              style={{
                overflow: 'hidden',
                position: 'relative',
              }}
              onClick={() => {
                onClickPlayer(player.index, index)
              }}
            >
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-100"></div>
              <img
                className="absolute left-0 top-0 object-cover opacity-60"
                src={wonderSideImageNameToUrlDictionary[wonderSide.imageName]}
                alt=""
              />
              {/* content */}
              <div className="relative flex w-full flex-col px-2 pb-2">
                <div className="text-center text-lg font-black text-white" style={{ textShadow: '1px 1px 4px black' }}>
                  {player.name}
                </div>
                <div className="mb-1 flex flex-row justify-between">
                  <TotalShieldsView {...{ numberOfShields: player.possession.shields, symbolSize: 36 }} />
                  <TotalCoinsView {...{ numberOfCoins: player.possession.resource.coin ?? 0, symbolSize: 36 }} />
                </div>
                <WonderStagesView
                  {...{ stages: wonderSide.stages, builtStages: player.builtWonderStages, viewType: 'preview' }}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}
