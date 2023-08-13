import classNames from 'classnames'
import { AnyCard, CardCategory } from 'seven-wonders-game'
import oreBackground from '../../../../../assets/ore.png'
import EffectView from '../effect/EffectView'
import CardCostView from './CardCostView'
import { ChainFromView } from './ChainFromView'

interface Props {
  card: AnyCard
  onClick(): void
  className?: string
  isPreview?: boolean
}

export default function CardView({ card, onClick, className, isPreview }: Props) {
  const color = cardColor[card.category]
  if (isPreview) {
    const symbolSize = 28
    return (
      <div
        className={classNames('flex flex-col items-center rounded-sm', className)}
        style={{ backgroundColor: cardColor[card.category], height: symbolSize * 1.25, width: symbolSize * 4 }}
        onClick={onClick}
      >
        {renderEffectContent(card, symbolSize)}
      </div>
    )
  } else {
    const symbolSize = 40
    return (
      <div
        className={classNames('flex flex-col items-center rounded-sm', className)}
        style={{ backgroundColor: cardColor[card.category], height: 190, width: 135 }}
        onClick={onClick}
      >
        {renderEffectContent(card, symbolSize, 75)}
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
              <CardCostView cost={card.cost} />
            </div>
          )}
          {card.chainFrom && <ChainFromView {...{ cardId: card.chainFrom, backgroundColor: color }} />}
        </div>
      </div>
    )
  }
}
const renderEffectContent = (card: AnyCard, symbolSize: number, height?: number) => {
  return (
    <div className="flex h-full w-full items-center justify-center border border-black p-1" style={{ height: height }}>
      <EffectView {...{ effect: card.effect, cardId: card.id, symbolSize: symbolSize }} />
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
