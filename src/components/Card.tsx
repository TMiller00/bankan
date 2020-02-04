import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { moveRight, moveLeft } from '../redux/actions'
import { Box, TextArea } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons';
import { LaneProperties } from './Lane'

export type CardType = {
  text: string,
  index: number,
  moveRight: any,
  moveLeft: any,
}

const Card: React.FC<CardType & LaneProperties> = ({ text, index, laneNumber, boardLength, moveRight, moveLeft }) => {
  const [value, setValue] = useState(text || '')

  useEffect(() => {
    setValue(text)
  }, [text])

  return (
    <Box
      align={'center'}
      alignContent={'center'}
      border={{ color: 'brand', size: 'xsmall' }}
      direction='row'
      height="xsmall"
      justify={'center'}
      margin={{ bottom: 'medium' }}
      pad="medium"
      round="xsmall"
    >
      { laneNumber !== 0 && <CaretPrevious onClick={() => moveLeft(index, laneNumber)}/> }
      <TextArea
        placeholder="Type here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      { laneNumber !== boardLength - 1 && <CaretNext onClick={() => moveRight(index, laneNumber)}/> }
    </Box>
  )
}

export default connect(null, { moveRight, moveLeft })(Card);
