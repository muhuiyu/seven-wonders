import CardCategory from './CardCategory'
import Resource, { ResourceType } from './Resource'

type Countable = CardCategory | 'wonderStages' | 'defeatTokens'
type Target = 'self' | 'leftNeighbor' | 'rightNeighbor'

interface Reward extends Resource {
  point?: number
  pointPer?: {
    countable: Countable
    multiplier: number
    from: Target[]
  }
  coinPer?: {
    countable: Countable
    multiplier: number
    from: Target[]
  }
  shield?: number
  scienceMaths?: number
  scienceEngineering?: number
  scienceWriting?: number
  transactionDiscountFor?: {
    resourceType: ResourceType
    from: Target[]
    amount: number
  }
  totalTransactionDiscount?: {
    from: Target[]
    amount: number
  }
  monetaryLoss?: number
}

function point<TPoints extends number>(n: TPoints): { point: TPoints } {
  return { point: n }
}

// Point per
type PointPer<
  TCountable extends Countable,
  TMultiplier extends number,
  TFrom extends Target | Target[] | 'neighborhood',
> = {
  pointPer: {
    countable: TCountable
    multiplier: TMultiplier
    from: TFrom extends 'neighborhood'
      ? ['self', 'leftNeighbor', 'rightNeighbor']
      : TFrom extends Target[]
      ? TFrom
      : [TFrom]
  }
}

function pointPer<TCountable extends Countable>(countable: TCountable): PointPer<TCountable, 1, ['self']>
function pointPer<TCountable extends Countable, TMultiplier extends number>(
  countable: TCountable,
  multiplier: TMultiplier,
): PointPer<TCountable, TMultiplier, ['self']>
function pointPer<TCountable extends Countable, TFrom extends Target | Target[] | 'neighborhood'>(
  countable: TCountable,
  from: TFrom,
): PointPer<TCountable, 1, TFrom>
function pointPer<
  TCountable extends Countable,
  TMultiplier extends number,
  TFrom extends Target | Target[] | 'neighborhood',
>(countable: TCountable, multiplier: TMultiplier, from: TFrom): PointPer<TCountable, TMultiplier, TFrom>

function pointPer(
  countable: Countable,
  multiplierOrFrom?: number | Target | Target[] | 'neighborhood',
  from?: Target | Target[] | 'neighborhood',
): Reward {
  let multiplier: number = 1
  let target: Target[] = ['self']

  switch (typeof multiplierOrFrom) {
    case 'number':
      multiplier = multiplierOrFrom
      break
    case 'string':
      target = multiplierOrFrom === 'neighborhood' ? ['self', 'leftNeighbor', 'rightNeighbor'] : [multiplierOrFrom]
      break
    case 'object':
      target = multiplierOrFrom
      break
  }

  switch (typeof from) {
    case 'string':
      target = from === 'neighborhood' ? ['self', 'leftNeighbor', 'rightNeighbor'] : [from]
      break
    case 'object':
      target = from
      break
  }

  return { pointPer: { countable, multiplier, from: target } }
}

// Coin per
type CoinPer<
  TCountable extends Countable,
  TMultiplier extends number,
  TFrom extends Target | Target[] | 'neighborhood',
> = {
  coinPer: {
    countable: TCountable
    multiplier: TMultiplier
    from: TFrom extends 'neighborhood'
      ? ['self', 'leftNeighbor', 'rightNeighbor']
      : TFrom extends Target[]
      ? TFrom
      : [TFrom]
  }
}

function coinPer<TCountable extends Countable>(countable: TCountable): CoinPer<TCountable, 1, ['self']>
function coinPer<TCountable extends Countable, TMultiplier extends number>(
  countable: TCountable,
  multiplier: TMultiplier,
): CoinPer<TCountable, TMultiplier, ['self']>
function coinPer<TCountable extends Countable, TFrom extends Target | Target[] | 'neighborhood'>(
  countable: TCountable,
  from: TFrom,
): CoinPer<TCountable, 1, TFrom>
function coinPer<
  TCountable extends Countable,
  TMultiplier extends number,
  TFrom extends Target | Target[] | 'neighborhood',
>(countable: TCountable, multiplier: TMultiplier, from: TFrom): CoinPer<TCountable, TMultiplier, TFrom>

function coinPer(
  countable: Countable,
  multiplierOrFrom?: number | Target | Target[] | 'neighborhood',
  from?: Target | Target[] | 'neighborhood',
): Reward {
  let multiplier: number = 1
  let target: Target[] = ['self']

  switch (typeof multiplierOrFrom) {
    case 'number':
      multiplier = multiplierOrFrom
      break
    case 'string':
      target = multiplierOrFrom === 'neighborhood' ? ['self', 'leftNeighbor', 'rightNeighbor'] : [multiplierOrFrom]
      break
    case 'object':
      target = multiplierOrFrom
      break
  }

  switch (typeof from) {
    case 'string':
      target = from === 'neighborhood' ? ['self', 'leftNeighbor', 'rightNeighbor'] : [from]
      break
    case 'object':
      target = from
      break
  }

  return { coinPer: { countable, multiplier, from: target } }
}

// TransactionDiscount
// type TransactionDiscountFor<
//   TResourceType extends ResourceType,
//   TAmount extends number,
//   TFrom extends Target | Target[],
// > = {
//   transactionDiscountFor: {
//     resource: TResourceType
//     from: TFrom extends Target[] ? TFrom : [TFrom]
//     amount: TAmount
//   }
// }
// function transactionDiscountFor<TResourceType extends ResourceType, TFrom extends Target | Target[]>(
//   resourceType: TResourceType,
//   from: TFrom,
// ): TransactionDiscountFor<TResourceType, 1, TFrom>

function transactionDiscountFor(resourceType: ResourceType, from: Target | Target[], amount?: number): Reward {
  let discountAmount: number = amount ?? 1
  let target: Target[] = []
  switch (typeof from) {
    case 'string':
      target = [from]
      break
    case 'object':
      target = from
      break
  }
  return { transactionDiscountFor: { resourceType, from: target, amount: discountAmount } }
}

function totalTransactionDiscount(from: Target | Target[], amount?: number): Reward {
  let discountAmount: number = amount ?? 1
  let target: Target[] = []
  switch (typeof from) {
    case 'string':
      target = [from]
      break
    case 'object':
      target = from
      break
  }
  return { totalTransactionDiscount: { from: target, amount: discountAmount } }
}

// Shield
function shield<TShields extends number>(shield: TShields): { shield: TShields } {
  return { shield }
}

// Science
const maths = Object.freeze({ scienceMaths: 1 } satisfies Reward)
const engineering = Object.freeze({ scienceEngineering: 1 } satisfies Reward)
const writing = Object.freeze({ scienceWriting: 1 } satisfies Reward)

// MonetaryLoss
function monetaryLoss<TMonetaryLoss extends number>(n: TMonetaryLoss): { monetaryLoss: TMonetaryLoss } {
  return { monetaryLoss: n }
}

export {
  coinPer,
  engineering,
  maths,
  monetaryLoss,
  point,
  pointPer,
  shield,
  totalTransactionDiscount,
  transactionDiscountFor,
  writing,
}
export default Reward
