import { StandardDeck, StandardWonders } from 'seven-wonders-game'
import CardView from './components/card/CardView'
import WonderView from './components/wonder/WonderView'

interface Props {}

export default function AllItemScreen(props: Props) {
  const ageOneCards = Object.values(StandardDeck).filter((card) => card.phase == 'age1')
  const ageTwoCards = Object.values(StandardDeck).filter((card) => card.phase == 'age2')
  const ageThreeCards = Object.values(StandardDeck).filter((card) => card.phase == 'age3')

  return (
    <div className="p-4">
      <header className="App-header">
        <h1 className="text-2xl">7 Wonders</h1>
      </header>
      <div className="flex flex-row gap-x-2">
        <div className="flex-1">
          <div className="text-lg font-bold">Age I Cards</div>
          <div className="flex flex-col gap-y-1">
            {ageOneCards.map((card, index) => (
              <CardView key={index} {...{ card }} />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">Age II Cards</div>
          <div className="flex flex-col gap-y-1">
            {ageTwoCards.map((card, index) => (
              <CardView key={index} {...{ card }} />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">Age III Cards</div>
          <div className="flex flex-col gap-y-1">
            {ageThreeCards.map((card, index) => (
              <CardView key={index} {...{ card }} />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">Wonders</div>
          {Object.values(StandardWonders).map((wonder) => (
            <WonderView {...{ wonder }} />
          ))}
        </div>
      </div>
    </div>
  )
}
