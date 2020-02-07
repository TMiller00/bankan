import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'
import rootReducer from './redux/reducers'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  saveState({
    board: store.getState().board
  })
})

export default store
