import React from 'react'
import { Grommet } from 'grommet'
import Board from './components/Board'

const App: React.FC = () => {

  return (
    <Grommet plain>
      <Board/>
    </Grommet>
  );
}

export default App;
