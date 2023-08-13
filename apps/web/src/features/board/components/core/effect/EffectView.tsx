import classNames from 'classnames'
import _ from 'lodash'
import {
  AnyCard,
  BaseEffect,
  CardCategory,
  Effect,
  ResourceTypes,
  TransactionDiscountEffect,
  isBaseEffect,
  isMultipleBaseEffects,
  isOneOfBaseEffects,
  isTransactionDiscountEffect,
  isWildcardScience,
} from 'seven-wonders-game'
import {
  ArenaView,
  BazarView,
  BuildersGuildView,
  ChamberOfCommerceView,
  ClayView,
  CoinView,
  CompassView,
  DecoratorsGuildView,
  GearView,
  GlassView,
  HavenView,
  LighthouseView,
  LoomView,
  LudusView,
  OreView,
  PapyrusView,
  PointPerCivilianStructuresView,
  PointPerCommercialStructuresView,
  PointPerGuildsView,
  PointPerManufacturedGoodsView,
  PointPerMilitaryView,
  PointPerRawMaterialsView,
  PointPerScientificStructuresView,
  PointView,
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

const renderEffectItems = (effect: Effect, defaultSymbolSize: number) => {
  if (isTransactionDiscountEffect(effect)) {
    return renderTransactionDiscountEffect(effect, defaultSymbolSize)
  } else if (isBaseEffect(effect)) {
    return renderSingleEffect(effect, defaultSymbolSize, 0)
  } else if (isMultipleBaseEffects(effect)) {
    const symbolSize = effect.length > 2 ? defaultSymbolSize * 0.75 : defaultSymbolSize
    return (
      <div className="flex flex-row justify-center">
        {effect.map((item, index) => renderSingleEffect(item, symbolSize, index))}
      </div>
    )
  } else if (isOneOfBaseEffects(effect)) {
    let symbolSize = defaultSymbolSize
    switch (effect.oneOf.length) {
      case 3:
        symbolSize = defaultSymbolSize * 0.75
        break
      case 4:
        symbolSize = defaultSymbolSize * 0.6
        break
    }

    const views: JSX.Element[] = []
    effect.oneOf.forEach((item, index) => {
      const view = renderSingleEffect(item, symbolSize, index)
      if (view) views.push(view)
      if (index < effect.oneOf.length - 1) {
        views.push(<SeparatorView key={index} size={symbolSize} />)
      }
    })

    return <div className="flex flex-row justify-center">{views}</div>
  } else if (isWildcardScience(effect)) {
    return <div>wildcardscience</div>
  } else {
    return <div>?</div>
  }
}

function renderTransactionDiscountEffect(transactionDiscount: TransactionDiscountEffect, symbolSize: number) {
  return (
    <div className="flex flex-col items-center">
      <CoinView amount={transactionDiscount.amount} size={symbolSize * 0.5} />

      <div className="flex flex-row">
        {_.includes(transactionDiscount.from, 'leftNeighbor') && (
          <div className="text-sm text-white" style={{ textShadow: '1px 1px 1px black' }}>
            ◀
          </div>
        )}
        {typeof transactionDiscount.types === 'object' &&
          transactionDiscount.types.map((type, index) => {
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
        {typeof transactionDiscount.types === 'string' && transactionDiscount.types === 'totalTransaction' && (
          <CoinView amount={transactionDiscount.amount} size={symbolSize} />
        )}
        {typeof transactionDiscount.types === 'string' && transactionDiscount.types === 'initialResource' && (
          <div>IR</div>
        )}
        {_.includes(transactionDiscount.from, 'rightNeighbor') && (
          <div className="text-sm text-white" style={{ textShadow: '-1px 1px 1px black' }}>
            ▶
          </div>
        )}
      </div>
    </div>
  )
}

function renderSingleEffect(effect: BaseEffect, symbolSize: number, viewIndex: number) {
  for (const resource of ResourceTypes) {
    if (!effect[resource]) continue
    switch (resource) {
      case 'coin':
        return <CoinView key={`coin-${viewIndex}`} amount={effect.coin!} size={symbolSize} />
      case 'wood':
        return <WoodView key={`wood-${viewIndex}`} size={symbolSize} />
      case 'stone':
        return <StoneView key={`stone-${viewIndex}`} size={symbolSize} />
      case 'clay':
        return <ClayView key={`clay-${viewIndex}`} size={symbolSize} />
      case 'ore':
        return <OreView key={`ore-${viewIndex}`} size={symbolSize} />
      case 'glass':
        return <GlassView key={`glass-${viewIndex}`} size={symbolSize} />
      case 'loom':
        return <LoomView key={`loom-${viewIndex}`} size={symbolSize} />
      case 'papyrus':
        return <PapyrusView key={`papyrus-${viewIndex}`} size={symbolSize} />
    }
  }
  if (effect.point) {
    return <PointView key={`point-${viewIndex}`} amount={effect.point} size={symbolSize} />
  } else if (effect.shield) {
    if (effect.shield > 3) {
      // need to go second line
      return (
        <div key={viewIndex} className="flex flex-row justify-center">
          {Array(effect.shield)
            .fill(null)
            .map((_, index) => (
              <ShieldView key={index} size={symbolSize * 0.7} />
            ))}
        </div>
      )
    } else {
      return (
        <div key={`shield-${viewIndex}`} className="flex flex-row justify-center">
          {Array(effect.shield)
            .fill(null)
            .map((_, index) => (
              <ShieldView key={index} size={symbolSize} />
            ))}
        </div>
      )
    }
  } else if (effect.scienceMaths) {
    return <CompassView key={viewIndex} size={symbolSize} />
  } else if (effect.scienceEngineering) {
    return <GearView key={viewIndex} size={symbolSize} />
  } else if (effect.scienceWriting) {
    return <TabletView key={viewIndex} size={symbolSize} />
  } else if (effect.monetaryLoss) {
    return <div key={viewIndex}>-{effect.monetaryLoss}</div>
  } else if (effect.pointPer) {
    return (
      <div key={viewIndex}>
        {effect.pointPer.multiplier} p for per {effect.pointPer.countable} from{' '}
        {effect.pointPer.from
          .map((target) => {
            switch (target) {
              case 'leftNeighbor':
                return '<'
              case 'rightNeighbor':
                return '>'
              case 'self':
                '^'
            }
          })
          .join(', ')}
      </div>
    )
  } else if (effect.coinPer) {
    return (
      <div key={viewIndex}>
        {effect.coinPer.multiplier} $ for per {effect.coinPer.countable} from{' '}
        {effect.coinPer.from
          .map((target) => {
            switch (target) {
              case 'leftNeighbor':
                return '<'
              case 'rightNeighbor':
                return '>'
              case 'self':
                '^'
            }
          })
          .join(', ')}
      </div>
    )
  }
  return null
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
