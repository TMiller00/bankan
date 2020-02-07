import { initialState } from './redux/reducers/board'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bankan')

    if (serializedState === null) {
      return { initialState }
    }

    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('bankan', serializedState)
  } catch {}
}
