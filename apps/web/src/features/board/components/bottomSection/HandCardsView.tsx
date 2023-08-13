import { AnyCard } from 'seven-wonders-game'
import CardView from '../core/card/CardView'

interface Props {
  cards: AnyCard[]
  onSelectCard(card: AnyCard): void
  selectedCard?: AnyCard
}

export default function HandCardsView({ cards, onSelectCard, selectedCard }: Props) {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      {cards.map((card) => (
        <CardView
          className={selectedCard?.id === card.id ? 'border-4 border-red-500' : ''}
          key={card.id}
          {...{ card }}
          onClick={() => {
            onSelectCard(card)
          }}
        />
      ))}
    </div>
  )
}
