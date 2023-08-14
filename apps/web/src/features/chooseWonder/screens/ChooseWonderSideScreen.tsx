import classNames from 'classnames'
import { GameState, Player, neighborIndexes } from 'seven-wonders-game'

import { useState } from 'react'
import alexandriaDayBackgroundPreview from '../../../assets/wonders/alexandria-day-preview.png'
import alexandriaDayBackground from '../../../assets/wonders/alexandria-day.png'
import alexandriaNightBackgroundPreview from '../../../assets/wonders/alexandria-night-preview.png'
import alexandriaNightBackground from '../../../assets/wonders/alexandria-night.png'
import ephesusDayBackgroundPreview from '../../../assets/wonders/ephesus-day-preview.png'
import ephesusDayBackground from '../../../assets/wonders/ephesus-day.png'
import ephesusNightBackgroundPreview from '../../../assets/wonders/ephesus-night-preview.png'
import ephesusNightBackground from '../../../assets/wonders/ephesus-night.png'
import gizaDayBackgroundPreview from '../../../assets/wonders/giza-day-preview.png'
import gizaDayBackground from '../../../assets/wonders/giza-day.png'
import gizaNightBackgroundPreview from '../../../assets/wonders/giza-night-preview.png'
import gizaNightBackground from '../../../assets/wonders/giza-night.png'
import rhodesDayBackgroundPreview from '../../../assets/wonders/rhodes-day-preview.png'
import rhodesDayBackground from '../../../assets/wonders/rhodes-day.png'
import rhodesNightBackgroundPreview from '../../../assets/wonders/rhodes-night-preview.png'
import rhodesNightBackground from '../../../assets/wonders/rhodes-night.png'
import { Button } from '../../common/components/Button'

interface Props {
  gameState: GameState
  onSelectWonderSide(sideIndex: number): void
}

export default function ChooseWonderSideScreen({ gameState, onSelectWonderSide }: Props) {
  const players = gameState.players
  const currentUserIndex = gameState.userIndex
  const [sideIndex, setSideIndex] = useState(players[gameState.userIndex].wonderSideIndex)
  const [isShowingChangeSidePanel, setIsShowingChangeSidePanel] = useState(false)
  const centerIndex = Math.floor(players.length / 2)
  console.log(players.length)

  const onClickCenter = () => {
    setIsShowingChangeSidePanel(true)
  }

  const onClickStart = () => {
    onSelectWonderSide(sideIndex)
  }

  const wonderCardsView = () => {
    const { leftIndex, rightIndex } = neighborIndexes(gameState.userIndex, gameState.players.length)

    const views = gameState.players.map((player, index) => (
      <WonderCard
        key={player.id}
        {...{
          player: player,
          isCenter: gameState.userIndex === index,
          isNeighbor: leftIndex === index || rightIndex === index,
          centerSideIndex: sideIndex,
          onClickCenter,
        }}
      />
    ))
    const difference = Math.abs(currentUserIndex - centerIndex)
    if (difference === 0) {
      return views
    } else if (currentUserIndex < centerIndex) {
      return [...views.slice(-difference), ...views.slice(0, players.length - difference)]
    } else {
      return [...views.slice(difference, -1), ...views.slice(0, difference)]
    }
  }

  return (
    <div className="flex h-full flex-col items-center justify-center bg-yellow-200">
      <div className="flex flex-row items-center justify-center gap-x-2">{wonderCardsView()}</div>
      <button
        className="mt-4 w-48 border border-yellow-500 bg-red-500 py-2 font-bold text-yellow-300"
        onClick={onClickStart}
      >
        Start
      </button>
      {isShowingChangeSidePanel && (
        <div className="absolute flex flex-col items-center gap-y-3 bg-yellow-500 p-4">
          <h2 className="text-2xl font-bold">Choose side</h2>
          <img
            src={wonderSideImageNameToUrlDictionary[players[currentUserIndex].wonder.sides[sideIndex].previewImageName]}
            width={600}
            alt=""
          />
          <div className="flex flex-row items-center gap-x-4">
            <Button
              title="Back"
              onClick={() => {
                setIsShowingChangeSidePanel(false)
              }}
            />
            <Button
              title="Change side"
              onClick={() => {
                setSideIndex(sideIndex === 0 ? 1 : 0)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// wonder stage
const WonderCard = ({
  player,
  isCenter,
  isNeighbor,
  centerSideIndex,
  onClickCenter,
}: {
  player: Player
  isCenter: boolean
  isNeighbor: boolean
  centerSideIndex: number
  onClickCenter(): void
}) => {
  const wonder = player.wonder
  const wonderSide = isCenter ? player.wonder.sides[centerSideIndex] : player.wonder.sides[player.wonderSideIndex]

  let widthString = 'w-32'
  let topBottomHeightString = 'h-7'
  let contentHeightString = 'h-40'
  if (isCenter) {
    widthString = 'w-52'
    topBottomHeightString = 'h-12'
    contentHeightString = 'h-60'
  } else if (isNeighbor) {
    widthString = 'w-40'
    topBottomHeightString = 'h-8'
    contentHeightString = 'h-48'
  }

  return (
    <div
      className={classNames(widthString)}
      onClick={() => {
        if (isCenter) {
          onClickCenter()
        }
      }}
    >
      <div
        className={classNames(
          'flex flex-col items-center justify-center border border-yellow-400 bg-green-900',
          topBottomHeightString,
        )}
      >
        {isCenter && <div className="text-center text-white">{wonder.shortName}</div>}
      </div>
      <div
        className={classNames(contentHeightString)}
        style={{
          backgroundImage: `url(${wonderSideImageNameToUrlDictionary[wonderSide.imageName]})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="">
          {isCenter && <div className="text-center font-bold text-white">Click to change side</div>}
        </div>
      </div>
      <div
        className={classNames(
          'flex flex-col items-center justify-center border border-yellow-400 bg-green-900',
          topBottomHeightString,
        )}
      >
        <div className={classNames(isCenter ? 'text-base' : 'text-xs', 'text-center font-semibold text-white')}>
          {wonder.shortName}
        </div>
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
  'alexandria-day-preview.png': alexandriaDayBackgroundPreview,
  'alexandria-night-preview.png': alexandriaNightBackgroundPreview,
  'ephesus-day-preview.png': ephesusDayBackgroundPreview,
  'ephesus-night-preview.png': ephesusNightBackgroundPreview,
  'giza-day-preview.png': gizaDayBackgroundPreview,
  'giza-night-preview.png': gizaNightBackgroundPreview,
  'rhodes-day-preview.png': rhodesDayBackgroundPreview,
  'rhodes-night-preview.png': rhodesNightBackgroundPreview,
}
