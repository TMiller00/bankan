import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { moveRight, moveLeft, updateCard, deleteCard } from '../redux/actions'
import { Box, TextInput } from 'grommet'
import { CaretNext, CaretPrevious, Close } from 'grommet-icons';
import { LaneProperties } from './Lane'

export type CardType = {
  text: string,
  index: number,
  moveRight: any,
  moveLeft: any,
  updateCard: any,
  deleteCard: any,
}

const Card: React.FC<CardType & LaneProperties> = (props) => {
  const { text, index, laneNumber, boardLength, moveRight, moveLeft, updateCard, deleteCard } = props
  const [value, setValue] = useState(text || '')

  useEffect(() => {
    setValue(text)
  }, [text])

  return (
    <Box
      align={'center'}
      alignContent={'center'}
      border={{ color: 'brand', size: 'xsmall' }}
      direction='column'
      height='xsmall'
      margin={{ bottom: 'medium' }}
      pad="xsmall"
      round="xsmall"
    >
      <Box
        alignSelf='start'
        align='start'
      >
        <Close
          size='small'
          onClick={() => deleteCard(index, laneNumber)}
        />
      </Box>
      <Box
        direction='row'
        justify={'center'}
        align={'center'}
        margin={{ vertical: 'xsmall' }}
      >
        { laneNumber !== 0 && <CaretPrevious onClick={() => moveLeft(index, laneNumber)}/> }
        <TextInput
          placeholder="Type here"
          value={value}
          onChange={(event) => updateCard(index, laneNumber, event.target.value)}
        />
        { laneNumber !== boardLength - 1 && <CaretNext onClick={() => moveRight(index, laneNumber)}/> }
      </Box>
    </Box>
  )
}

export default connect(null, { moveRight, moveLeft, updateCard, deleteCard })(Card);
