import { AnyCard, CardCategory } from 'seven-wonders-game'
import oreBackground from '../../../../assets/ore.png'
import RewardView from '../reward/RewardView'
import { ChainFromView } from './ChainFromView'
import CostView from './CostView'

interface Props {
  card: AnyCard
  onClick(): void
}

export default function CardView({ card, onClick }: Props) {
  const color = cardColor[card.category]
  return (
    <div
      className="flex flex-col items-center rounded-sm"
      style={{ backgroundColor: cardColor[card.category], height: 190, width: 135 }}
    >
      {/* <div className="p-4">{card.name}</div> */}
      <div className="flex h-[60px] w-full justify-center border border-black p-1">
        <RewardView {...{ reward: card.reward }} />
      </div>
      <div
        className="flex h-full w-full flex-row"
        style={{
          backgroundImage: `url(${oreBackground})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {card.cost && (
          <div
            className="ml-1 h-fit w-6 border-b border-l border-r border-black py-1 text-center"
            style={{ backgroundColor: color }}
          >
            <CostView cost={card.cost} />
          </div>
        )}
        {card.chainFrom && <ChainFromView {...{ cardId: card.chainFrom, backgroundColor: color }} />}
      </div>
    </div>
  )
}

const cardColor: Record<CardCategory, string> = {
  rawMaterials: '#8b4513',
  manufacturedGoods: '#c0c0c0',
  civilianStructures: '#1e90ff',
  scientificStructures: '#2e8b22',
  commercialStructures: '#ffd700',
  militaryStructures: '#ff0000',
  guilds: '#9370db',
  leaders: '#d3d3d3',
  cities: '#000000',
}
