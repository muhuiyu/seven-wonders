import { useEffect, useRef, useState } from 'react'
import { ClientToServerEvents, GameState, PlayerMove, ServerToClientEvents } from 'seven-wonders-game'
import { Socket, io } from 'socket.io-client'
import BoardScreen from './features/board/screens/BoardScreen'
import ChooseWonderSideScreen from './features/chooseWonder/screens/ChooseWonderSideScreen'
import GameEndScreen from './features/gameEnd/screens/GameEndScreen'
import MilitaryScreen from './features/military/screens/MilitaryScreen'
import WelcomeScreen from './features/welcome/WelcomeScreen'

function App() {
  const [username, setUsername] = useState('')
  const [gameId, setGameId] = useState('')
  const [gameState, setGameState] = useState<GameState | null>(null)
  const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>()

  useEffect(() => {
    socketRef.current = io('http://localhost:3000', { transports: ['websocket'] })
    socketRef.current.on('connect', () => {
      console.log('connect')
    })
    socketRef.current.on('disconnect', () => {
      console.log('disconnect')
    })
    socketRef.current.on('sendGameStateResponse', (response) => {
      if (response.isSuccess && response.gameState) {
        console.log('success')
        console.log('get game ID', response.gameState?.id)
        setGameState(response.gameState)
      } else {
        console.log('failed')
        alert('cannot join game')
      }
    })
  }, [])

  const onSelectPlayerMove = (move: PlayerMove) => {
    if (!gameState) return
    socketRef.current?.emit('selectCard', gameState.id, gameState.userIndex, move)
  }

  const onSelectWonderSide = (sideIndex: number) => {
    if (!gameState) return
    socketRef.current?.emit('chooseWonderSide', gameState.id, gameState.userIndex, sideIndex)
  }

  const onClickGoToNextPhase = () => {
    if (!gameState) return
    socketRef.current?.emit('goToNextPhase', gameState.id, gameState.userIndex)
  }

  const onNewGameClick = () => {
    if (!gameState) return
    socketRef.current?.emit('newGame', gameState.players[gameState.userIndex].name)
  }

  if (gameState) {
    console.log('current phase', gameState.phase)
    switch (gameState.phase) {
      case 'wonderSide':
        return <ChooseWonderSideScreen {...{ gameState, onSelectWonderSide }} />
      case 'military1':
      case 'military2':
      case 'military3':
        return <MilitaryScreen {...{ gameState, onClickGoToNextPhase }} />
      case 'specialAbility':
        break
      case 'gameEnd':
        return <GameEndScreen {...{ gameState, onNewGameClick }} />
      default:
        // leaders, age1, age2, age3
        return <BoardScreen {...{ gameState, onSelectPlayerMove }} />
    }
  } else
    return (
      <WelcomeScreen
        username={username}
        gameId={gameId}
        onChangeUsername={setUsername}
        onChangeGameId={setGameId}
        onClickJoinGame={() => {
          console.log('join game', gameId, 'as', username)
          socketRef.current?.emit('joinGame', username, gameId)
        }}
        onClickNewGame={() => {
          console.log('start new game as', username)
          socketRef.current?.emit('newGame', username)
        }}
      />
    )
}

export default App
