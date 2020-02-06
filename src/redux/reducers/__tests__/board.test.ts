import reducer, { initialState } from '../board'
import { MOVE_LEFT, MOVE_RIGHT, UPDATE_CARD } from '../../actionTypes'

const moveRightExpect = {
  "board": {
    "0": {
      "cards": [
        {"text": "nibh dolor"},
        {"text": "suscipit ligula"},
        {"text": "porttitor tristique"}
      ],
      "title": "Ready For Development"
    },
    "1": {
      "cards": [
        {"text": "In fringilla"},
        {"text": "nunc eget"}
      ],
      "title": "In Progress"},
    "2": {
      "cards": [],
      "title": "In Review"
    },
    "3": {
      "cards": [],
      "title": "Merged"
    }
  }
}

const moveLeftExpect = {
  "board": {
    "0": {
      "cards": [
        {"text": "nunc eget"},
        {"text": "nibh dolor"},
        {"text": "suscipit ligula"},
        {"text": "porttitor tristique"},
        {"text": "In fringilla"}
      ],
      "title": "Ready For Development"
    },
    "1": {
      "cards": [],
      "title": "In Progress"},
    "2": {
      "cards": [],
      "title": "In Review"
    },
    "3": {
      "cards": [],
      "title": "Merged"
    }
  }
}

const updateCardExpect = {
  "board": {
    "0": {
      "cards": [
        {"text": "test"},
        {"text": "nibh dolor"},
        {"text": "suscipit ligula"},
        {"text": "porttitor tristique"},
      ],
      "title": "Ready For Development"
    },
    "1": {
      "cards": [{"text": "In fringilla"}],
      "title": "In Progress"},
    "2": {
      "cards": [],
      "title": "In Review"
    },
    "3": {
      "cards": [],
      "title": "Merged"
    }
  }
}

describe('board reducer', () => {
  it('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle MOVE_RIGHT', () => {
    expect(reducer(undefined, { type: MOVE_RIGHT, payload: { index: 0, laneNumber: 0 }})
    ).toEqual(moveRightExpect)
  })

  it('should handle MOVE_LEFT', () => {
    expect(reducer(undefined, { type: MOVE_LEFT, payload: { index: 0, laneNumber: 1 }})
    ).toEqual(moveLeftExpect)
  })

  it('should handle UPDATE_CARD', () => {
    expect(reducer(undefined, { type: UPDATE_CARD, payload: { index: 0, laneNumber: 0, text: 'test' }})
    ).toEqual(updateCardExpect)
  })
})
