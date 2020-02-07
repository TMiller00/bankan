import { moveRight, moveLeft, updateCard, addCard, deleteCard } from '../actions'
import * as types from '../actionTypes'

describe('actions', () => {
  it('should create an action to move a card right', () => {
    const index = 0
    const laneNumber = 0
    const expectedAction = {
      type: types.MOVE_RIGHT,
      payload: { index, laneNumber }
    }
    expect(moveRight(index, laneNumber)).toEqual(expectedAction)
  })

  it('should create an action to move a card left', () => {
    const index = 1
    const laneNumber = 1
    const expectedAction = {
      type: types.MOVE_LEFT,
      payload: { index, laneNumber }
    }
    expect(moveLeft(index, laneNumber)).toEqual(expectedAction)
  })

  it('should create an action to update a card', () => {
    const index = 0
    const laneNumber = 0
    const text = 'Lorem ipsum'
    const expectedAction = {
      type: types.UPDATE_CARD,
      payload: { index, laneNumber, text }
    }
    expect(updateCard(index, laneNumber, text)).toEqual(expectedAction)
  })

  it('should create an action to add a card', () => {
    const text = 'Lorem ipsum'
    const expectedAction = {
      type: types.ADD_CARD,
      payload: { text }
    }
    expect(addCard(text)).toEqual(expectedAction)
  })

  it('should create an action to delete a card', () => {
    const index = 0
    const laneNumber = 0
    const expectedAction = {
      type: types.DELETE_CARD,
      payload: { index, laneNumber }
    }
    expect(deleteCard(index, laneNumber)).toEqual(expectedAction)
  })
})
