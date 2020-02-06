import { MOVE_RIGHT, MOVE_LEFT, UPDATE_CARD } from '../actionTypes'

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

export const initialState = { board } as any;

type Action = {
  type: string | undefined
  payload: any | undefined
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
      const actionedLane = board[laneNumber]
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
    case UPDATE_CARD: {
      const { index, laneNumber, text } = action.payload
      const updatedCards = board[laneNumber].cards.map((c: any, i: number) => {
        if (i === index) {
          c.text = text
        }

        return c
      })

      return {
        ...state,
        board: {
          ...board,
          [laneNumber]: { ...board[laneNumber], cards: updatedCards },
        }
      }
    }
    default:
      return state
  }
}
