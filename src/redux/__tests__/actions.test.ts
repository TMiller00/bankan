import { moveRight, moveLeft, updateCard } from '../actions'
import { MOVE_RIGHT, MOVE_LEFT, UPDATE_CARD } from '../actionTypes'

describe('actions', () => {
  it('should create an action to move a card right', () => {
    const index = 0
    const laneNumber = 0
    const expectedAction = {
      type: MOVE_RIGHT,
      payload: { index, laneNumber }
    }
    expect(moveRight(index, laneNumber)).toEqual(expectedAction)
  })

  it('should create an action to move a card left', () => {
    const index = 1
    const laneNumber = 1
    const expectedAction = {
      type: MOVE_LEFT,
      payload: { index, laneNumber }
    }
    expect(moveLeft(index, laneNumber)).toEqual(expectedAction)
  })

  it('should create an action to update a card', () => {
    const index = 0
    const laneNumber = 0
    const text = 'Lorem ipsum'
    const expectedAction = {
      type: UPDATE_CARD,
      payload: { index, laneNumber, text }
    }
    expect(updateCard(index, laneNumber, text)).toEqual(expectedAction)
  })
})
