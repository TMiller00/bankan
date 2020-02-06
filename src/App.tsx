import React from 'react'
import { Grommet } from 'grommet'
import Board from './components/Board'
import theme from './theme'

const App: React.FC = () => {

  return (
    <Grommet theme={theme}>
      <Board/>
    </Grommet>
  );
}

export default App;
