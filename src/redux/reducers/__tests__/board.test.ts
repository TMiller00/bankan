import reducer, { initialState } from '../board'
import { MOVE_LEFT, MOVE_RIGHT, UPDATE_CARD, ADD_CARD, DELETE_CARD } from '../../actionTypes'

const moveRightExpect = {
  "board": {
    "0": {
      "cards": [],
      "title": "Ready For Development"
    },
    "1": {
      "cards": [{"text": "Hola mundo!"}],
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
      "cards": [{"text": "Hola mundo!"}],
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
      "cards": [{"text": "Hello world!"}],
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

const addCardExpect = {
  "board": {
    "0": {
      "cards": [{"text": "Hola mundo!"}, {"text": "Hello world!"}],
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

const deleteCardExpect = {
  "board": {
    "0": {
      "cards": [],
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

describe('board reducer', () => {
  it('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle MOVE_RIGHT', () => {
    expect(reducer(undefined, { type: MOVE_RIGHT, payload: { index: 0, laneNumber: 0 }})
    ).toEqual(moveRightExpect)
  })

  it('should handle MOVE_LEFT', () => {
    expect(reducer(moveRightExpect, { type: MOVE_LEFT, payload: { index: 0, laneNumber: 1 }})
    ).toEqual(moveLeftExpect)
  })

  it('should handle ADD_CARD', () => {
    expect(reducer(undefined, { type: ADD_CARD, payload: { laneNumber: 0, text: 'Hello world!' }})
    ).toEqual(addCardExpect)
  })

  it('should handle UPDATE_CARD', () => {
    expect(reducer(initialState, { type: UPDATE_CARD, payload: { index: 0, laneNumber: 0, text: 'Hello world!' }})
    ).toEqual(updateCardExpect)
  })

  it('should handle DELETE_CARD', () => {
    expect(reducer(initialState, { type: DELETE_CARD, payload: { index: 0, laneNumber: 0 }})
    ).toEqual(deleteCardExpect)
  })
})
