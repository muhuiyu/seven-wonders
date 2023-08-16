import { AnyCard } from 'seven-wonders-game'
import CardView from '../core/card/CardView'

interface Props {
  cardIds: AnyCard['id'][]
  selectedCardId: AnyCard['id'] | undefined
  onClickCard(cardId: AnyCard['id']): void
}

export default function HandcardsView({ cardIds, onClickCard, selectedCardId }: Props) {
  return (
    <div className="flex flex-row items-center justify-center gap-x-2">
      {cardIds.map((cardId) => {
        if (!cardId) {
          return null
        } else {
          return (
            <CardView
              className={selectedCardId === cardId ? 'border-4 border-red-500' : ''}
              key={cardId}
              {...{ cardId: cardId }}
              onClick={() => {
                onClickCard(cardId)
              }}
            />
          )
        }
      })}
    </div>
  )
}
