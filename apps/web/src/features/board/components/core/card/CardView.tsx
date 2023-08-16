import classNames from 'classnames'
import { AnyCard, CardCategory, findCard } from 'seven-wonders-game'
import oreBackground from '../../../../../assets/ore.png'
import { getChainFrom, getResource } from '../common/requirementUtils'
import EffectView from '../effect/EffectView'
import CardCostView from './CardCostView'
import { ChainFromView } from './ChainFromView'

interface Props {
  cardId: AnyCard['id']
  onClick(): void
  className?: string
  isPreview?: boolean
  isShowingName?: boolean
}

export default function CardView({ cardId, onClick, className, isPreview, isShowingName }: Props) {
  const card = findCard(cardId)
  if (!card) {
    throw new Error(`Card not found: ${cardId}`)
  }
  if (isPreview) {
    const symbolSize = 28
    return (
      <div
        className={classNames('flex flex-col items-center rounded-sm', className)}
        style={{
          backgroundColor: cardColor[card.category],
          height: symbolSize * 1.5,
          width: isShowingName ? symbolSize * 10 : symbolSize * 4,
        }}
        onClick={onClick}
      >
        {isShowingName ? (
          <div className="flex w-full flex-row items-center pl-2">
            <h2
              className="flex-1 font-medium"
              style={{
                color: cardTextColor[card.category],
              }}
            >
              {card.name}
            </h2>
            {renderEffectContent(card, symbolSize, 40, 'border-0')}
          </div>
        ) : (
          renderEffectContent(card, symbolSize)
        )}
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
          {card.requirement && getResource(card.requirement) && (
            <div
              className="ml-1 h-fit w-6 border-b border-l border-r border-black py-1 text-center"
              style={{ backgroundColor: cardColor[card.category] }}
            >
              <CardCostView cost={getResource(card.requirement)!} />
            </div>
          )}
          {card.requirement && getChainFrom(card.requirement) && (
            <ChainFromView
              {...{ cardId: getChainFrom(card.requirement)!, backgroundColor: cardColor[card.category] }}
            />
          )}
        </div>
      </div>
    )
  }
}
const renderEffectContent = (card: AnyCard, symbolSize: number, height?: number, className?: string) => {
  return (
    <div
      className={classNames('flex h-full w-full items-center justify-center border border-black p-1', className)}
      style={{ height: height }}
    >
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

const cardTextColor: Record<CardCategory, string> = {
  rawMaterials: '#fff',
  manufacturedGoods: '#fff',
  civilianStructures: '#fff',
  scientificStructures: '#fff',
  commercialStructures: '#000',
  militaryStructures: '#fff',
  guilds: '#fff',
  leaders: '#000',
  cities: '#fff',
}
