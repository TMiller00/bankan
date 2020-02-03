import React from 'react'
import { Grommet } from 'grommet'
import Board from './components/Board'

const App: React.FC = () => {
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
    { title: 'Done', cards: cards },
    { title: 'Merged', cards: cards },
  ]

  return (
    <Grommet plain>
      <Board board={board}/>
    </Grommet>
  );
}

export default App;
