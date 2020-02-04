import React from 'react'
import { Box, Heading } from 'grommet'
import Card, { CardType } from './Card'

export type LaneType = {
  title: string,
  cards: CardType[],
}

export type LaneProperties = {
  laneNumber: number,
  boardLength: number
}

const Lane: React.FC<LaneType & LaneProperties> = (props) => {
  const { title, cards, laneNumber, boardLength } = props

  return (
    <Box basis='full' margin={{ left: 'xsmall', right: 'xsmall' }}>
      <Heading alignSelf='center' level={3}>{ title }</Heading>
      { cards.map((card: CardType, i: number) => <Card {...card} laneNumber={laneNumber} index={i} boardLength={boardLength} key={i}/>) }
    </Box>
  )
}

export default Lane
