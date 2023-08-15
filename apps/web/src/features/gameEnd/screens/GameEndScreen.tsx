import { GameState } from 'seven-wonders-game'
import LeaderBoardView from '../components/LeaderBoardView'
interface Props {
  gameState: GameState
  onNewGameClick: () => void
}

export default function GameEndScreen({ onNewGameClick, gameState }: Props) {
  return <LeaderBoardView {...{ gameState, onClickActionButton: onNewGameClick, buttonTitle: 'New Game' }} />
}
