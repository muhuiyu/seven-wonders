import { useEffect, useRef, useState } from 'react'
import { AnyCard, ClientToServerEvents, GameState, PlayerAction, ServerToClientEvents } from 'seven-wonders-game'
import { Socket } from 'socket.io-client'
import BoardScreen from './features/board/BoardScreen'
import TestScreen from './features/board/TestScreen'

function App() {
  const [username, setUsername] = useState('')
  const [gameId, setGameId] = useState('')
  const [gameState, setGameState] = useState<GameState | null>(null)
  const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>()

  useEffect(() => {
    // socketRef.current = io('http://localhost:3000', { transports: ['websocket'] })
    // socketRef.current.on('connect', () => {
    //   console.log('connect')
    // })
    // socketRef.current.on('disconnect', () => {
    //   console.log('disconnect')
    // })
    // socketRef.current.on('sendGameStateResponse', (response) => {
    //   if (response.isSuccess && response.gameState) {
    //     console.log('success')
    //     console.log('get game ID', response.gameState?.id)
    //     setGameState(response.gameState)
    //   } else {
    //     console.log('failed')
    //     alert('cannot join game')
    //   }
    // })
  }, [])

  const onSelectCard = (cardId: AnyCard['id'], action: PlayerAction) => {
    if (!gameState) return
    socketRef.current?.emit('selectCard', gameState.id, gameState.userIndex, cardId, action)
  }

  if (gameState) {
    return <BoardScreen {...{ gameState, onSelectCard }} />
  } else return <TestScreen />
  // return (
  //   <WelcomeScreen
  //     username={username}
  //     gameId={gameId}
  //     onChangeUsername={setUsername}
  //     onChangeGameId={setGameId}
  //     onClickJoinGame={() => {
  //       console.log('join game', gameId, 'as', username)
  //       socketRef.current?.emit('joinGame', username, gameId)
  //     }}
  //     onClickNewGame={() => {
  //       console.log('start new game as', username)
  //       socketRef.current?.emit('newGame', username)
  //     }}
  //   />
  // )
}

export default App
