import { AnyCard, GameState } from 'seven-wonders-game'
import WonderStagesView from '../core/wonder/WonderStagesView'
import HandcardsView from './HandCardsView'
import TotalCoinsView from './TotalCoinsView'
import TotalShieldsView from './TotalShieldsView'

interface Props {
  gameState: GameState
  selectedCardId: AnyCard['id'] | undefined
  onClickCard(cardId: AnyCard['id']): void
}

export default function CurrentUserStateView({ gameState, selectedCardId, onClickCard }: Props) {
  const currentUserIndex = gameState.userIndex
  const currentUserState = gameState.players[currentUserIndex]
  const wonderSide = currentUserState.wonder.sides[currentUserState.wonderSideIndex]

  return (
    <div className="flex flex-col items-center gap-y-2">
      {/* stages and coins */}
      <div className="flex flex-row gap-x-10">
        <TotalShieldsView {...{ numberOfShields: currentUserState.possession.shields, symbolSize: 54 }} />
        <WonderStagesView
          {...{ stages: wonderSide.stages, builtStages: currentUserState.builtWonderStages, viewType: 'currentUser' }}
        />
        <TotalCoinsView {...{ numberOfCoins: currentUserState.possession.resource.coin ?? 0, symbolSize: 54 }} />
      </div>
      {/* hand cards */}
      <HandcardsView {...{ cardIds: gameState.handcards, onClickCard, selectedCardId }} />
    </div>
  )
}
