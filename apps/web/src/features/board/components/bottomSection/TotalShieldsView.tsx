interface Props {
  numberOfShields: number
  symbolSize: number
}

export default function TotalShieldsView({ numberOfShields, symbolSize }: Props) {
  return (
    <div
      className="bg-red-500 text-center"
      style={{
        height: symbolSize,
        width: symbolSize,
        // backgroundImage: `url(${shieldImage})`,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}
    >
      <p className="text-white" style={{ fontSize: symbolSize * 0.6 }}>
        {numberOfShields}
      </p>
    </div>
  )
}
