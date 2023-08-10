import { Server } from 'socket.io'
const path = require('path')
const http = require('http')
const express = require('express')
var cors = require('cors')

const publicPath = path.join(__dirname, '/../web/public')
const port = process.env.PORT || 3000
let app = express()
let server = http.createServer(app)

app.use(
  cors({
    'Access-Control-Allow-Origin': '*',
  }),
)
app.use(express.static(publicPath))

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server)

io.on('connection', (socket) => {
  console.log('A user just connected.')
  socket.on('disconnect', () => {
    console.log('A user has disconnected.')
  })
  // socket.emit('noArg')
  // socket.emit('basicEmit', 1, '2', Buffer.from([3]))
  // socket.emit('withAck', '4', (e) => {
  // e is inferred as number
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})

interface ServerToClientEvents {
  noArg: () => void
  basicEmit: (a: number, b: string, c: Buffer) => void
  withAck: (d: string, callback: (e: number) => void) => void
}

interface ClientToServerEvents {
  hello: () => void
}

interface InterServerEvents {
  ping: () => void
}

interface SocketData {
  name: string
  age: number
}

// works when broadcast to all
// io.emit('noArg')

// works when broadcasting to a room
// io.to('room1').emit('basicEmit', 1, '2', Buffer.from([3]))
// })

// io.on('connection', (socket) => {
//   socket.on('hello', () => {
//     // ...
//     console.log('receive hello')
//   })
// })
// io.serverSideEmit('ping')

// io.on('ping', () => {
//   // ...
// })

// io.on('connection', (socket) => {
//   socket.data.name = 'john'
//   socket.data.age = 42
// })
