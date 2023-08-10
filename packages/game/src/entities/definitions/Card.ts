import CardCategory from './CardCategory'
import CardReward from './CardReward'
import Resource from './Resource'

type CardId = string

interface Card<TCardId extends CardId, TReward extends CardReward> {
  id: TCardId
  name: string
  category: CardCategory
  phase: 'leaders' | 'age1' | 'age2' | 'age3'
  cost?: Resource
  chainFrom?: CardId | CardId[]
  reward: TReward
  minPlayers?: number
}

type AnyCard = Card<CardId, CardReward>

function card<TCardId extends CardId, TReward extends CardReward>(
  card: Card<TCardId, TReward>,
): Card<TCardId, TReward> {
  return card
}

type VariantCardId<TBaseCardId extends CardId, TVariant extends number> = `${TBaseCardId}(${TVariant}+)`

function cardVariants<
  TBaseCardId extends CardId,
  TReward extends CardReward,
  TMinPlayers extends Readonly<[number, number]>,
>(
  card: Omit<Card<TBaseCardId, TReward>, 'minPlayers'>,
  minPlayers: TMinPlayers,
): [
  Card<VariantCardId<TBaseCardId, TMinPlayers[0]>, TReward>,
  Card<VariantCardId<TBaseCardId, TMinPlayers[1]>, TReward>,
]

function cardVariants<
  TBaseCardId extends CardId,
  TReward extends CardReward,
  TMinPlayers extends Readonly<[number, number, number]>,
>(
  card: Omit<Card<TBaseCardId, TReward>, 'minPlayers'>,
  minPlayers: TMinPlayers,
): [
  Card<VariantCardId<TBaseCardId, TMinPlayers[0]>, TReward>,
  Card<VariantCardId<TBaseCardId, TMinPlayers[1]>, TReward>,
  Card<VariantCardId<TBaseCardId, TMinPlayers[2]>, TReward>,
]

function cardVariants(card: Omit<AnyCard, 'minPlayers'>, minPlayers: number[]): AnyCard[] {
  return minPlayers.map((minPlayers) => ({ ...card, id: `${card.id}(${minPlayers}+)`, minPlayers }))
}

export { card, cardVariants }
export type { AnyCard, CardId, VariantCardId }
export default Card
