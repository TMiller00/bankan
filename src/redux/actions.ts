import { MOVE_RIGHT, MOVE_LEFT } from './actionTypes'

export const moveRight = (index: number, laneNumber: number) => ({
  type: MOVE_RIGHT,
  payload: { index, laneNumber }
})

export const moveLeft = (index: number, laneNumber: number) => ({
  type: MOVE_LEFT,
  payload: { index, laneNumber }
})
