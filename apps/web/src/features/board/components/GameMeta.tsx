interface Props {
  points: string
  wonder: string
  builtCards: string
}

export default function GameMeta({ points, wonder, builtCards }: Props) {
  return (
    <div className="game-meta">
      <p>Points: {points}</p>
      <p>Wonder: {wonder}</p>
      <p>Previously built cards: {builtCards}</p>
      {/* and so on... */}
    </div>
  )
}
