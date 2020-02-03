import React from 'react'
import { Box } from 'grommet'
import Lane, { LaneType } from './Lane'

type BoardType = {
  board: LaneType[]
}

const Board: React.FC<BoardType> = ({ board }) => (
  <Box direction='row' justify='around'>
    { board.map((lane: LaneType, i: number) => <Lane {...lane} laneNumber={i} boardLength={board.length} key={i}/>) }
  </Box>
)

export default Board
