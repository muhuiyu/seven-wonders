// export interface Player {
//   id: number
//   name: string
//   playedCards: AnyCard[]
//   coins: number
//   defeatTokens: number
//   wonder: Wonder
//   wonderStages: {
//     [wonderStageId: number]: AnyCard['id']
//   }
// }

// export interface GameState {
//   currentPhase: 'leaders' | 'age1' | 'age2' | 'age3' | 'age1Military'
// players: Player[]

// }

// export interface Transition {

// }

// // currentGameState, nextTransition -> NextGameState

// export interface PartialGameState {
//     // players: {

//     // }
// }

// const getPartialGameStateForPlayer => (gameState: GameState, playerId: Player['id']) {

// }

// combine all the actions together as transition

// get legal moves for each user
// play a card, discard, bury a card under the wonder stage
// server wait for all players finish the movement (async)
// array of 7 nil
// setValue to array, when it's all filled, combine actions into transition-> move to next game

// async function playGame() {
//     let currentGameState = initializeGameState()
//     while (!currentGameState.isEnded) {
//         const allPlayerActions = await waitForPlayerActions()
//         const transition = generateTransition(allPlayerActions)
//         currentGameState = advanceGameState(currentGameState, transition)
//     }
//     // Game end
// }

// const numberOfPlayers = 7
// const totalNumberOfRounds = 7
// const generateHandCardSets = (cards: AnyCard[]) => {
//   return new Array(Math.ceil(cards.length / numberOfPlayers))
//     .fill(null)
//     .map(() => _.shuffle(cards).splice(0, numberOfPlayers))
// }

// const ageOneCards = Object.values(StandardDeck).filter((card) => card.phase == 'age1')
// const ageTwoCards = Object.values(StandardDeck).filter((card) => card.phase == 'age2')
// const ageThreeCards = Object.values(StandardDeck).filter((card) => card.phase == 'age3')

// export interface GameStage {
//   phase: 'age1' | 'age2' | 'age3'
//   round: number
// }

// const setupGameState = (): GameState => {

// }

// const allGames: { [gameId: string]: GameCoordinator } = {}

// function initializeNewGame(): GameCoordinator {

// }

// function useGameCoordinator(playerId: number) => {

// }

// export default function GameCoordinator() {
//     const [currentGameState, setCurrentGameState] = useState<GameState>(setupGameState())

//   // Hand cards
//   const ageOneHandCardSets = generateHandCardSets(ageOneCards)
//   const ageTwoHandCardSets = generateHandCardSets(ageTwoCards)
//   const ageThreeHandCardSets = generateHandCardSets(ageThreeCards)
//   const [currentHandCardSets, setCurrentHandCardSets] = useState(ageOneHandCardSets)

//   // Wonders
//   const wonders = _.shuffle(Object.values(StandardWonders))

// //   const setupPlayerSessions = (): Player[] => {
//     // return [
//     //   {
//     //     id: 0,
//     //     name: 'Grace',
//     //     playedCards: [],
//     //     wonder: wonders[0],
//     //   },
//     //   {
//     //     id: 1,
//     //     name: 'Player 1',
//     //     playedCards: [],
//     //     wonder: wonders[1],
//     //   },
//     //   {
//     //     id: 2,
//     //     name: 'Player 2',
//     //     playedCards: [],
//     //     wonder: wonders[2],
//     //   },
//     //   {
//     //     id: 3,
//     //     name: 'Player 3',
//     //     playedCards: [],
//     //     wonder: wonders[3],
//     //   },
//     //   {
//     //     id: 4,
//     //     name: 'Player 4',
//     //     playedCards: [],
//     //     wonder: wonders[4],
//     //   },
//     //   {
//     //     id: 5,
//     //     name: 'Player 5',
//     //     playedCards: [],
//     //     wonder: wonders[5],
//     //   },
//     //   {
//     //     id: 6,
//     //     name: 'Player 6',
//     //     playedCards: [],
//     //     wonder: wonders[6],
//     //   },
//     // ]
// //   }

//   // Players
//   const [players, setPlayers] = useState<Player[]>(setupPlayerSessions())

//   const onSelectCard = (playerId: number, cardId: AnyCard['id']) => {
//     console.log('player', playerId, 'choose card', cardId)
//     // setSelectedCards({ ...selectedCards, playerId: cardId })
//   }

//   const getCurrentPlayerSession = (playerId: number): Player => {
//     return players[playerId]
//   }

//   const getPlayerSession = (): Player[] => {
//     return players
//   }

//   const shiftHandCardSets = () => {
//     // setFn(([first, ...rest]) => [...rest, first])
//   }

//   const getCurrentPlayerHandCards = (): AnyCard[] => {
//     return ageOneHandCardSets[0]
//   }

//   const getPartialGameState = (): PartialGameState => {

//   }

//   return {
//     currentGameStage,
//     onSelectCard,
//   }
// }
