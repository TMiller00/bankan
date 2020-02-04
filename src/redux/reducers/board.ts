import { MOVE_RIGHT, MOVE_LEFT } from '../actionTypes'

let cards = [
  { text: 'nunc eget' },
  { text: 'nibh dolor' },
  { text: 'suscipit ligula' },
  { text: 'porttitor tristique' }
]

const board = {
  0: { title: 'Ready For Development', cards: cards },
  1: { title: 'In Progress', cards: [{ text: 'In fringilla' }] },
  2: { title: 'In Review', cards: [] },
  3: { title: 'Merged', cards: [] },
}

const initialState = { board } as any;

type Action = {
  type: string
  payload: any
}

export default (state = initialState, action: Action) => {
  const { board } = state

  switch(action.type) {
    case MOVE_RIGHT: {
      const { index, laneNumber } = action.payload
      const actionedLane = board[laneNumber]
      const nextLaneCards = [...board[laneNumber + 1].cards, actionedLane.cards[index]]
      const actionedLaneCards = actionedLane.cards.filter((c: any, i: number) => i !== index)

      return {
        ...state,
        board: {
          ...board,
          [laneNumber]: { ...actionedLane, cards: actionedLaneCards },
          [laneNumber + 1]: { ...board[laneNumber + 1], cards: nextLaneCards },
        }
      }
    }
    case MOVE_LEFT: {
      const { index, laneNumber } = action.payload
      const actionedLane = state.board[laneNumber]
      const prevLaneCards = [...board[laneNumber - 1].cards, actionedLane.cards[index]]
      const actionedLaneCards = actionedLane.cards.filter((c: any, i: number) => i !== index)

      return {
        ...state,
        board: {
          ...board,
          [laneNumber]: { ...actionedLane, cards: actionedLaneCards },
          [laneNumber - 1]: { ...board[laneNumber - 1], cards: prevLaneCards },
        }
      }
    }
    default:
      return state
  }
}
