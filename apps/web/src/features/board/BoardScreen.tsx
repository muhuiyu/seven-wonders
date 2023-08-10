interface Props {
  gameId: string
}

export default function BoardScreen({ gameId }: Props) {
  return <div></div>
  //   const currentPlayerId = 0
  //   const { partialGameState, onSelectCard } = GameCoordinator()
  //   const onSelectCardForAction = (cardId: AnyCard['id']) => {
  //     onSelectCard(cardId)
  //     console.log('choose action')
  //   }
  //   const [isShowingCardActionList, setIsShowingCardActionList] = useState(false)
  //   return (
  //     <>
  //       <div className="p-4">
  //         <header className="App-header">
  //           <h1 className="text-2xl">7 Wonders</h1>
  //         </header>
  //         <div className="my-4 flex flex-row gap-x-6">
  //           <div className="flex-1">
  //             <div className="mb-4 text-2xl">Player list</div>
  //             <div className="my-4">
  //               Current: {currentGameStage.phase} round {currentGameStage.round}
  //             </div>
  //             <div className="flex flex-col gap-y-4">
  //               {getPlayerSession().map((player) => (
  //                 <PlayerSessionView key={player.id} {...{ player, onSelectCard }} />
  //               ))}
  //               {/* <PlayerSessionView {...{ player: getCurrentPlayerSession(currentPlayerId), onSelectCard }} /> */}
  //             </div>
  //           </div>
  //           <div className="flex-1">
  //             <div className="text-lg font-bold">My hand cards</div>
  //             <div className="flex flex-row gap-x-2">
  //               {getCurrentPlayerHandCards().map((card) => (
  //                 <CardView
  //                   key={card.id}
  //                   {...{ card }}
  //                   onClick={() => {
  //                     onSelectCard(currentPlayerId, card.id)
  //                   }}
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }
  // const PlayerSessionView = ({
  //   player,
  //   onSelectCard,
  // }: {
  //   player: Player
  //   onSelectCard(playerId: number, cardId: AnyCard['id']): void
  // }) => {
  //   return (
  //     <div className="flex flex-col">
  //       <div className="text-base font-bold">{player.name}</div>
  //       <div className="">[Wonder] {player.wonder.name}</div>
  //       <div className="flex flex-row gap-x-2">
  //         {player.playedCards.map((card) => (
  //           <div
  //             key={card.id}
  //             onClick={() => {
  //               onSelectCard(player.id, card.id)
  //             }}
  //           >
  //             <CardView
  //               {...{ card }}
  //               onClick={() => {
  //                 // TODO
  //               }}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   )
}
