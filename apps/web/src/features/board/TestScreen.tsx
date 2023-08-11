import { IconDefinition, faFolder } from '@fortawesome/free-regular-svg-icons'
import { faCalculator, faGear, faRotateBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import _ from 'lodash'
import { AnyCard, StandardDeck, StandardWonders } from 'seven-wonders-game'
import CardView from './components/card/CardView'

interface Props {}

export default function TestScreen() {
  const wonder = Object.values(StandardWonders)[0]
  const wonderSide = wonder.sides[0]
  const wonderStages: {
    [wonderStageId: WonderStage['id']]: AnyCard['id']
  } = {
    'theColossusOfRhodes-day-1': 'stonePit',
  }
  const cards = _.shuffle(Object.values(StandardDeck)).slice(0, 7)

  const onSelectCard = (cardId: AnyCard['id']) => {
    // TODO:
  }

  const hasBuilt = (stageId: string): boolean => {
    return wonderStages[stageId] !== undefined
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/* top: other players */}
      <div className="flex w-full flex-row justify-evenly">
        <div>player 1</div>
        <div>player 2</div>
        <div>player 3</div>
        <div>player 4</div>
        <div>player 5</div>
        <div>player 6</div>
      </div>

      {/* middle: left neighbor + my played cards + right neighbor */}
      <div className="flex w-full flex-1 flex-row justify-between">
        <div>Left neighbor</div>
        <div>Me</div>
        <div>Right neighbor</div>
      </div>

      {/* bottom */}
      <div className="flex w-full flex-1 flex-row items-baseline justify-between">
        {/* settings */}
        <SettingsView
          onClickSettings={() => {
            // TODO:
          }}
        />

        {/* current player */}
        <div className="flex flex-col items-center">
          {/* stages and coins */}
          <div className="flex flex-row gap-x-10">
            <div>SHIELD</div>
            <div className="flex flex-row gap-x-2">
              {wonderSide.stages.map((stage) => (
                <div
                  key={stage.id}
                  className={classNames('flex w-[250px] flex-row p-4', hasBuilt(stage.id) ? 'bg-white' : 'bg-black')}
                >
                  {/* {stage.reward
                   && <RewardView {...{ reward: stage.reward }} />} */}
                  <div>reward</div>
                  {!hasBuilt(stage.id) && <div className="text-white">resource</div>}
                </div>
              ))}
            </div>
            <div>COIN</div>
          </div>
          {/* hand cards */}
          <HandCardsView {...{ cards, onSelectCard }} />
        </div>

        {/* scores */}
        <LeaderboardView
          onClickLeaderboard={() => {
            // TODO:
          }}
        />
      </div>
    </div>
  )
}

const IconButton = ({ icon, onClick }: { icon: IconDefinition; onClick(): void }) => {
  return (
    <button onClick={onClick} className="h-12 w-12 rounded-full bg-emerald-600" style={{ border: '1px solid #ffd700' }}>
      <FontAwesomeIcon icon={icon} size="2x" color="#ffd700" />
    </button>
  )
}

const HandCardsView = ({ cards, onSelectCard }: { cards: AnyCard[]; onSelectCard(cardId: AnyCard['id']): void }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      {cards.map((card) => (
        <CardView
          key={card.id}
          {...{ card }}
          onClick={() => {
            onSelectCard(card.id)
          }}
        />
      ))}
    </div>
  )
}

const SettingsView = ({ onClickSettings }: { onClickSettings(): void }) => {
  return (
    <div className="flex h-[200px] w-20 flex-col items-center gap-y-2 bg-green-800">
      <IconButton icon={faGear} onClick={onClickSettings} />
      {/* discard */}
      <div className="flex flex-row items-center gap-x-2">
        <FontAwesomeIcon icon={faFolder} size="2x" color="#ffd700" />
        <p className="text-lg font-bold text-white">14</p>
      </div>
    </div>
  )
}

const LeaderboardView = ({ onClickLeaderboard }: { onClickLeaderboard(): void }) => {
  return (
    <div className="flex h-[200px] w-20 flex-col items-center gap-y-2 bg-green-800">
      <IconButton icon={faCalculator} onClick={onClickLeaderboard} />
      {/* current age */}
      <div className="flex flex-row items-center gap-x-2" style={{ color: '#ffd700', fontSize: 30 }}>
        III <FontAwesomeIcon icon={faRotateBackward} color="#ffd700" />
      </div>
    </div>
  )
}
