import { AnyCard, GameState, neighborIndexes } from 'seven-wonders-game'
import alexandriaDayBackground from '../../../../assets/wonders/alexandria-day.png'
import alexandriaNightBackground from '../../../../assets/wonders/alexandria-night.png'
import babylonDayBackground from '../../../../assets/wonders/babylon-day.png'
import babylonNightBackground from '../../../../assets/wonders/babylon-night.png'
import ephesusDayBackground from '../../../../assets/wonders/ephesus-day.png'
import ephesusNightBackground from '../../../../assets/wonders/ephesus-night.png'
import gizaDayBackground from '../../../../assets/wonders/giza-day.png'
import gizaNightBackground from '../../../../assets/wonders/giza-night.png'
import halikarnassosDayBackground from '../../../../assets/wonders/halikarnassos-day.png'
import halikarnassosNightBackground from '../../../../assets/wonders/halikarnassos-night.png'
import olympiaDayBackground from '../../../../assets/wonders/olympia-day.png'
import olympiaNightBackground from '../../../../assets/wonders/olympia-night.png'
import rhodesDayBackground from '../../../../assets/wonders/rhodes-day.png'
import rhodesNightBackground from '../../../../assets/wonders/rhodes-night.png'

import CardView from '../core/card/CardView'
import InitialResourceView from './InitialResourceView'
import NeighborPlayedCardsView from './NeighborPlayedCardsView'

interface Props {
  gameState: GameState
}

export default function PlayedCardsView({ gameState }: Props) {
  const numberOfPlayers = gameState.players.length

  const currentPlayerIndex = gameState.userIndex
  const currentPlayerState = gameState.players[currentPlayerIndex]
  const currentPlayerWonderSide = currentPlayerState.wonder.sides[currentPlayerState.wonderSideIndex]
  const { leftIndex, rightIndex } = neighborIndexes(currentPlayerIndex, numberOfPlayers)

  const onClickCard = (cardId: AnyCard['id']) => {
    // TODO: show card details
    console.log('user clicked card', cardId)
  }

  return (
    <div
      className="flex w-full flex-1 flex-row justify-between"
      style={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="absolute left-0 top-0 h-full w-full bg-gray-700 opacity-100"></div>
      <img
        className="absolute left-0 top-0 w-full object-cover opacity-40"
        src={wonderSideImageNameToUrlDictionary[currentPlayerWonderSide.imageName]}
        alt=""
      />
      <div className="relative flex w-full flex-row ">
        <NeighborPlayedCardsView className="flex h-full" {...{ gameState, userIndex: leftIndex, onClickCard }} />
        <div className="flex flex-1 flex-col p-4">
          <div className="flex flex-row items-start">
            {currentPlayerState.initialResource && (
              <InitialResourceView {...{ resource: currentPlayerState.initialResource, symbolSize: 32 }} />
            )}
            <div>
              {currentPlayerState.playedCards.map((cardId) => (
                <CardView
                  key={cardId}
                  {...{ cardId, isPreview: true }}
                  onClick={() => {
                    onClickCard(cardId)
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <NeighborPlayedCardsView className="flex h-full" {...{ gameState, userIndex: rightIndex, onClickCard }} />
      </div>
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
