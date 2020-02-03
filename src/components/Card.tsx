import React, { useState } from 'react'
import { Box, TextArea } from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons';
import { LaneProperties } from './Lane'

export type CardType = {
  text: string
}

const Card: React.FC<CardType & LaneProperties> = ({ text, laneNumber, boardLength }) => {
  const [value, setValue] = useState(text || '')

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
      { laneNumber !== 0 && <CaretPrevious/> }
      <TextArea
        placeholder="Type here"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      { laneNumber !== boardLength - 1 && <CaretNext/> }
    </Box>
  )
}

export default Card;
