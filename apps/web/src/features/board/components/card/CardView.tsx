import { AnyCard } from 'seven-wonders-game'
import { cardColor } from '../../../../models/cardColor'
import RewardView from '../reward/RewardView'
import CostView from './CostView'

interface Props {
  card: AnyCard
  onClick(): void
}

export default function CardView({ card, onClick }: Props) {
  return (
    <div
      className=" flex h-[300px] w-[120px] flex-col items-center p-1"
      style={{ backgroundColor: cardColor[card.category] }}
      onClick={onClick}
    >
      <div className="w-full text-base font-semibold">{card.name}</div>
      {<RewardView {...{ reward: card.reward }} />}
      {card.cost && <CostView {...{ cost: card.cost }} />}
    </div>
  )
}
