let cards = [
  { text: 'In fringilla' },
  { text: 'nunc eget' },
  { text: 'nibh dolor' },
  { text: 'suscipit ligula' },
  { text: 'porttitor tristique' }
]

const board = [
  { title: 'Ready For Development', cards: cards },
  { title: 'In Progress', cards: [] },
  { title: 'Done', cards: [] },
  { title: 'Merged', cards: [] },
]

const initialState = { board };

type Action = {
  type: string
}

export default (state = initialState, action: Action) => {
  switch(action.type) {
    default:
      return state
  }
}
