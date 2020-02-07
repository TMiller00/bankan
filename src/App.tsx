import React from 'react'
import { Grommet } from 'grommet'
import Header from './components/Header'
import Board from './components/Board'
import theme from './theme'

const App: React.FC = () => {

  return (
    <Grommet theme={theme}>
      <Header/>
      <Board/>
    </Grommet>
  );
}

export default App;
