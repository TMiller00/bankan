import * as types from './actionTypes'

export const moveRight = (index: number, laneNumber: number) => ({
  type: types.MOVE_RIGHT,
  payload: { index, laneNumber }
})

export const moveLeft = (index: number, laneNumber: number) => ({
  type: types.MOVE_LEFT,
  payload: { index, laneNumber }
})

export const updateCard = (index: number, laneNumber: number, text: string) => ({
  type: types.UPDATE_CARD,
  payload: { index, laneNumber, text }
})

export const addCard = (laneNumber: number, text: string) => ({
  type: types.ADD_CARD,
  payload: { laneNumber, text }
})

export const deleteCard = (index: number, laneNumber: number) => ({
  type: types.DELETE_CARD,
  payload: { index, laneNumber }
})
