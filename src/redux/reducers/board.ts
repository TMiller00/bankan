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
  switch(action.type) {
    case MOVE_RIGHT: {
      const { index, laneNumber } = action.payload
      const actionedLane = state.board[laneNumber]
      const nextLaneCards = [...state.board[laneNumber + 1].cards, actionedLane.cards[index]]
      const actionedLaneCards = actionedLane.cards.filter((c: any) => c.text !== (actionedLane.cards[index].text))

      return {
        ...state,
        board: {
          [laneNumber]: Object.assign(actionedLane, { cards: actionedLaneCards }),
          [laneNumber + 1]: Object.assign(state.board[laneNumber + 1], { cards: nextLaneCards }),
          ...state.board,
        }
      }
    }
    case MOVE_LEFT: {
      const { index, laneNumber } = action.payload
      const actionedLane = state.board[laneNumber]
      const prevLaneCards = [...state.board[laneNumber - 1].cards, actionedLane.cards[index]]
      const actionedLaneCards = actionedLane.cards.filter((c: any) => c.text !== (actionedLane.cards[index].text))

      return {
        ...state,
        board: {
          [laneNumber]: Object.assign(actionedLane, { cards: actionedLaneCards }),
          [laneNumber - 1]: Object.assign(state.board[laneNumber - 1], { cards: prevLaneCards }),
          ...state.board,
        }
      }
    }
    default:
      return state
  }
}
