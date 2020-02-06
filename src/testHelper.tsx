import React from 'react'
import { createStore } from 'redux'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'
import { initialState } from './redux/reducers/board'

export function renderWithRedux(
  ui: any,
  { initialState, store = createStore(rootReducer, initialState) }: { initialState?: any, store?: any } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

