import { MOVE_RIGHT, MOVE_LEFT, UPDATE_CARD, ADD_CARD } from './actionTypes'

export const moveRight = (index: number, laneNumber: number) => ({
  type: MOVE_RIGHT,
  payload: { index, laneNumber }
})

export const moveLeft = (index: number, laneNumber: number) => ({
  type: MOVE_LEFT,
  payload: { index, laneNumber }
})

export const updateCard = (index: number, laneNumber: number, text: string) => ({
  type: UPDATE_CARD,
  payload: { index, laneNumber, text }
})

export const addCard = (laneNumber: number, text: string) => ({
  type: ADD_CARD,
  payload: { laneNumber, text }
})
