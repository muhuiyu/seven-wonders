import classNames from 'classnames'
import _ from 'lodash'
import { AnyCard, CardCategory, Effect, ResourceType, SingleEffect, Target, ViewItem } from 'seven-wonders-game'
import {
  AgeOneVictoryTokenView,
  AgeThreeVictoryTokenView,
  AgeTwoVictoryTokenView,
  ArenaView,
  BazarView,
  BuildersGuildView,
  ChamberOfCommerceView,
  ClayView,
  CoinView,
  CompassView,
  DecoratorsGuildView,
  DiplomacyView,
  DiscardPileView,
  GearView,
  GlassView,
  HavenView,
  HiramView,
  LighthouseView,
  LoomView,
  LudusView,
  OreView,
  PapyrusView,
  PlayLastCardView,
  PointPerCivilianStructuresView,
  PointPerCommercialStructuresView,
  PointPerGuildsView,
  PointPerManufacturedGoodsView,
  PointPerMilitaryView,
  PointPerRawMaterialsView,
  PointPerScientificStructuresView,
  PointView,
  ScienceCopyView,
  SeparatorView,
  ShieldView,
  StoneView,
  TabletView,
  TwoPointPerManufacturedGoodsView,
  VineyardView,
  WoodView,
} from '../card/Symbols'

interface Props {
  effect: Effect
  className?: string
  cardId?: AnyCard['id']
  symbolSize: number
}

export default function EffectView({ effect, className, cardId, symbolSize }: Props) {
  const predefinedView = renderEffectViewByCardId(symbolSize, cardId)
  if (predefinedView) {
    return predefinedView
  } else {
    return <div className={classNames('flex', className)}>{renderEffectItems(effect, symbolSize)}</div>
  }
}

// For complicated effects only (e.g. point + coin)
const renderEffectViewByCardId = (symbolSize: number, cardId?: AnyCard['id']) => {
  if (!cardId) {
    return null
  }
  if (cardId === 'scientistsGuild') {
    const updatedSymbolSize = symbolSize * 0.75
    return (
      <div className="flex flex-row justify-center">
        <CompassView size={updatedSymbolSize} />
        <SeparatorView size={updatedSymbolSize} />
        <GearView size={updatedSymbolSize} />
        <SeparatorView size={updatedSymbolSize} />
        <TabletView size={updatedSymbolSize} />
      </div>
    )
  } else if (cardId === 'shipownersGuild') {
    const updatedSymbolSize = symbolSize * 0.8
    return (
      <div className="flex flex-row justify-center">
        <div></div>
        <PointPerRawMaterialsView size={updatedSymbolSize} />
        <PointPerManufacturedGoodsView size={updatedSymbolSize} />
        <PointPerGuildsView size={updatedSymbolSize} />
        <div></div>
      </div>
    )
  } else if (cardId === 'workersGuild') {
    return renderPointPerFromNeighborGuildView('rawMaterials', symbolSize)
  } else if (cardId === 'craftsmensGuild') {
    return renderPointPerFromNeighborGuildView('manufacturedGoods', symbolSize)
  } else if (cardId === 'tradersGuild') {
    return renderPointPerFromNeighborGuildView('commercialStructures', symbolSize)
  } else if (cardId === 'philosophersGuild') {
    return renderPointPerFromNeighborGuildView('scientificStructures', symbolSize)
  } else if (cardId === 'spiesGuild') {
    return renderPointPerFromNeighborGuildView('militaryStructures', symbolSize)
  } else if (cardId === 'magistratesGuild') {
    return renderPointPerFromNeighborGuildView('civilianStructures', symbolSize)
  } else if (cardId === 'hiram') {
    return <HiramView size={symbolSize} />
  } else if (cardId === 'decoratorsGuild') {
    return <DecoratorsGuildView size={symbolSize} />
  } else if (cardId === 'buildersGuild') {
    return <BuildersGuildView size={symbolSize} />
  } else if (cardId.includes('vineyard')) {
    return <VineyardView size={symbolSize} />
  } else if (cardId.includes('bazar')) {
    return <BazarView size={symbolSize} />
  } else if (cardId.includes('lighthouse')) {
    return <LighthouseView size={symbolSize} />
  } else if (cardId.includes('haven')) {
    return <HavenView size={symbolSize} />
  } else if (cardId.includes('chamberOfCommerce')) {
    return <ChamberOfCommerceView size={symbolSize} />
  } else if (cardId.includes('ludus')) {
    return <LudusView size={symbolSize} />
  } else if (cardId.includes('arena')) {
    return <ArenaView size={symbolSize} />
  } else {
    return null
  }
}

const renderEffectItems = (effect: Effect, defaultSymbolSize: number): JSX.Element[] => {
  if (Array.isArray(effect)) {
    let views: JSX.Element[] = []
    effect.forEach((singleEffect) => {
      views = [...views, ...renderSingleEffectItems(singleEffect, defaultSymbolSize)]
    })
    return views
  } else {
    return renderSingleEffectItems(effect, defaultSymbolSize)
  }
}

const renderSingleEffectItems = (effect: SingleEffect, defaultSymbolSize: number): JSX.Element[] => {
  const updatedSymbolSize =
    effect.views.length > 5
      ? defaultSymbolSize * 0.55
      : effect.views.length > 3
      ? defaultSymbolSize * 0.7
      : defaultSymbolSize
  return effect.views.map((item, index) => {
    const effectPoints = points(item)
    const effectCoins = coins(item)

    if (typeof item === 'object') {
      if (effectPoints) {
        return <PointView key={`point-${effectPoints}`} amount={effectPoints} size={updatedSymbolSize} />
      } else if (effectCoins) {
        return <CoinView key={`coin-${effectCoins}`} amount={effectCoins} size={updatedSymbolSize} />
      } else if ('amount' in item && 'resources' in item && 'from' in item) {
        // TransactionDiscount
        return renderTransactionDiscountEffect(
          { types: item.resources, from: item.from, amount: item.amount },
          updatedSymbolSize,
        )
      }
    }

    switch (item) {
      case 'wood':
        return <WoodView key={`wood-${index}`} size={updatedSymbolSize} />
      case 'clay':
        return <ClayView key={`clay-${index}`} size={updatedSymbolSize} />
      case 'stone':
        return <StoneView key={`stone-${index}`} size={updatedSymbolSize} />
      case 'ore':
        return <OreView key={`ore-${index}`} size={updatedSymbolSize} />
      case 'glass':
        return <GlassView key={`glass-${index}`} size={updatedSymbolSize} />
      case 'loom':
        return <LoomView key={`loom-${index}`} size={updatedSymbolSize} />
      case 'papyrus':
        return <PapyrusView key={`papyrus-${index}`} size={updatedSymbolSize} />
      case 'shield':
        return <ShieldView key={`shield-${index}`} size={updatedSymbolSize} />
      case '/':
        return <SeparatorView key={`separator-${index}`} size={updatedSymbolSize} />
      case 'maths':
        return <CompassView key={`maths-${index}`} size={updatedSymbolSize} />
      case 'engineering':
        return <GearView key={`engineering-${index}`} size={updatedSymbolSize} />
      case 'writing':
        return <TabletView key={`writing-${index}`} size={updatedSymbolSize} />
      case 'copyScience':
        return <ScienceCopyView key={`copyScience-${index}`} size={updatedSymbolSize} />
      case 'A':
        return <CoinView key={`coin-A-${index}`} amount={'A'} size={updatedSymbolSize} />
      case 'diplomacy':
        return <DiplomacyView key={`diplomacy-${index}`} size={updatedSymbolSize} />
      case 'ageOneVictoryToken':
        return <AgeOneVictoryTokenView key={`ageOneVictoryToken-${index}`} size={updatedSymbolSize} />
      case 'ageTwoVictoryToken':
        return <AgeTwoVictoryTokenView key={`ageTwoVictoryToken-${index}`} size={updatedSymbolSize} />
      case 'ageThreeVictoryToken':
        return <AgeThreeVictoryTokenView key={`ageThreeVictoryToken-${index}`} size={updatedSymbolSize} />
      case 'discardPile':
        return <DiscardPileView key={`discardPile-${index}`} size={updatedSymbolSize} />
      case 'playLastHand':
        return <PlayLastCardView key={`playLastHand-${index}`} size={updatedSymbolSize} />
      default:
        return <div key={`-${index}`}></div>
    }
  })
}

function points(item: ViewItem): number | undefined {
  if (typeof item === 'object' && 'type' in item && 'value' in item && item.type === 'point') {
    return item.value
  }
  return undefined
}

function coins(item: ViewItem): number | undefined {
  if (typeof item === 'object' && 'type' in item && 'value' in item && item.type === 'coin') {
    return item.value
  }
  return undefined
}

function renderTransactionDiscountEffect(
  {
    types,
    from,
    amount,
  }: {
    types: ResourceType[] | 'totalTransaction' | 'initialResource'
    from: Target[]
    amount: number
  },
  symbolSize: number,
) {
  return (
    <div className="flex flex-col items-center">
      <CoinView amount={amount} size={symbolSize * 0.5} />

      <div className="flex flex-row">
        {_.includes(from, 'leftNeighbor') && (
          <div className="text-sm text-white" style={{ textShadow: '1px 1px 1px black' }}>
            ◀
          </div>
        )}
        {typeof types === 'object' &&
          types.map((type, index) => {
            switch (type) {
              case 'wood':
                return <WoodView key={index} size={symbolSize * 0.5} />
              case 'ore':
                return <OreView key={index} size={symbolSize * 0.5} />
              case 'clay':
                return <ClayView key={index} size={symbolSize * 0.5} />
              case 'stone':
                return <StoneView key={index} size={symbolSize * 0.5} />
              case 'glass':
                return <GlassView key={index} size={symbolSize * 0.5} />
              case 'loom':
                return <LoomView key={index} size={symbolSize * 0.5} />
              case 'papyrus':
                return <PapyrusView key={index} size={symbolSize * 0.5} />
            }
          })}
        {typeof types === 'string' && types === 'totalTransaction' && <CoinView amount={amount} size={symbolSize} />}
        {typeof types === 'string' && types === 'initialResource' && <div>IR</div>}
        {_.includes(from, 'rightNeighbor') && (
          <div className="text-sm text-white" style={{ textShadow: '-1px 1px 1px black' }}>
            ▶
          </div>
        )}
      </div>
    </div>
  )
}

const renderPointPerFromNeighborGuildView = (category: CardCategory, symbolSize: number) => {
  let view: JSX.Element | null

  switch (category) {
    case 'rawMaterials':
      view = <PointPerRawMaterialsView size={symbolSize} />
      break
    case 'manufacturedGoods':
      view = <TwoPointPerManufacturedGoodsView size={symbolSize} />
      break
    case 'scientificStructures':
      view = <PointPerScientificStructuresView size={symbolSize} />
      break
    case 'militaryStructures':
      view = <PointPerMilitaryView size={symbolSize} />
      break
    case 'commercialStructures':
      view = <PointPerCommercialStructuresView size={symbolSize} />
      break
    case 'civilianStructures':
      view = <PointPerCivilianStructuresView size={symbolSize} />
      break
    default:
      view = null
  }

  return (
    <div className="flex flex-row items-center justify-center gap-x-1">
      <div className="text-sm text-white">◀</div>
      {view}
      <div className="text-sm text-white">▶</div>
    </div>
  )
}
