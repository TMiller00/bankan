import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Lane, { LaneType } from './Lane'

type BoardType = {
  board: LaneType[]
}

const Board: React.FC<BoardType> = ({ board }) => {
  const lanes = Object.values(board)

  return (
    <Box direction='row' justify='around'>
      { lanes.map((lane: LaneType, i: number) => <Lane {...lane} laneNumber={i} boardLength={lanes.length} key={i}/>) }
    </Box>
  )
}

const mapStateToProps = (state: any) => {
  const { board: { board } } = state
  return { board }
}

export default connect(mapStateToProps)(Board)
