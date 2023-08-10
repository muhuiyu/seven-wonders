import { useEffect, useRef } from 'react'
import { Socket, io } from 'socket.io-client'
import BoardScreen from './features/board/BoardScreen'

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
}

interface ClientToServerEvents {
  hello: () => void
}

function App() {
  const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents>>()
  useEffect(() => {
    socketRef.current = io('ws://localhost:3000')
    // socketRef.current.emit('hello')
    // socketRef.current.on('noArg', () => {
    //   // ...
    // })
  }, [])

  return <BoardScreen gameId="none" />
}

export default App
