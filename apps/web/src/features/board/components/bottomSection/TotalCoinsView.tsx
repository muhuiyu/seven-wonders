interface Props {
  numberOfCoins: number
  symbolSize: number
}

export default function TotalCoinsView({ numberOfCoins, symbolSize }: Props) {
  return (
    <div
      className="bg-yellow-500 text-center"
      style={{
        height: symbolSize,
        width: symbolSize,
        // backgroundImage: `url(${coinImage})`,
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
      }}
    >
      <p className="text-white" style={{ fontSize: symbolSize * 0.6 }}>
        {numberOfCoins}
      </p>
    </div>
  )
}
