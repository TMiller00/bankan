import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Lane, { LaneType } from './Lane'

type BoardType = {
  board: LaneType[]
}

const Board: React.FC<BoardType> = ({ board }) => {
  return (
    <Box direction='row' justify='around'>
      { board.map((lane: LaneType, i: number) => <Lane {...lane} laneNumber={i} boardLength={board.length} key={i}/>) }
    </Box>
  )
}

const mapStateToProps = (state: any) => {
  const { board: { board } } = state
  return { board }
}

export default connect(mapStateToProps)(Board)
