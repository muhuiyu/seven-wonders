import classNames from 'classnames'
import { useState } from 'react'

interface Props {
  username: string
  gameId: string
  onChangeUsername(value: string): void
  onChangeGameId(value: string): void
  onClickNewGame(username: string): void
  onClickJoinGame(username: string, gameId: string): void
}

export default function WelcomeScreen({
  username,
  gameId,
  onChangeUsername,
  onChangeGameId,
  onClickNewGame,
  onClickJoinGame,
}: Props) {
  const [isShowingJoinGame, setIsShowiningJoinGame] = useState(true)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-yellow-100 p-4">
      <h2 className="mb-4 text-3xl font-extrabold">Seven wonders</h2>

      <div className="flex flex-col items-center gap-y-2">
        <div className="my-3 flex flex-row gap-x-10 border-b-2 border-gray-200 px-5">
          <button
            className={classNames('text-lg', isShowingJoinGame && 'font-bold text-green-500')}
            onClick={() => {
              setIsShowiningJoinGame(true)
            }}
          >
            Join name
          </button>
          <button
            className={classNames('text-lg', !isShowingJoinGame && 'font-bold text-green-500')}
            onClick={() => {
              setIsShowiningJoinGame(false)
            }}
          >
            Create name
          </button>
        </div>
        {isShowingJoinGame ? (
          <JoinGameView {...{ username, gameId, onChangeUsername, onChangeGameId, onClickJoinGame }} />
        ) : (
          <CreateGameView {...{ username, onChangeUsername, onClickNewGame }} />
        )}
      </div>
    </div>
  )
}

const JoinGameView = ({
  username,
  gameId,
  onChangeUsername,
  onChangeGameId,
  onClickJoinGame,
}: {
  username: string
  gameId: string
  onChangeUsername(value: string): void
  onChangeGameId(value: string): void
  onClickJoinGame(username: string, gameId: string): void
}) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <TextField title="Username" placeholder="Enter username" value={username} onValueChange={onChangeUsername} />
      <TextField title="Game ID" placeholder="Enter game ID" value={gameId} onValueChange={onChangeGameId} />
      <Button
        title="Join game"
        onClick={() => {
          onClickJoinGame(username, gameId)
        }}
      />
    </div>
  )
}

const CreateGameView = ({
  username,
  onChangeUsername,
  onClickNewGame,
}: {
  username: string
  onChangeUsername(value: string): void
  onClickNewGame(username: string): void
}) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      <TextField title="Username" placeholder="Enter username" value={username} onValueChange={onChangeUsername} />
      <Button
        title="Create new game"
        onClick={() => {
          onClickNewGame(username)
        }}
      />
    </div>
  )
}

const TextField = ({
  title,
  placeholder,
  value,
  onValueChange,
}: {
  title: string
  placeholder: string
  value: string
  onValueChange(value: string): void
}) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <label htmlFor={title}>{title}</label>
      <input
        className="rounded-sm p-2"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value)
        }}
      />
    </div>
  )
}

const Button = ({ title, onClick }: { title: string; onClick(): void }) => {
  return (
    <button type="submit" className="w-fit rounded-md bg-green-600 px-4 py-2 text-white" onClick={onClick}>
      {title}
    </button>
  )
}
