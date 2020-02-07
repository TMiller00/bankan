import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../redux/actions'
import { Box, Heading, TextInput } from 'grommet'
import Card, { CardType } from './Card'
import { Add } from 'grommet-icons'

export type LaneType = {
  title: string,
  cards: CardType[],
  addCard: any
}

export type LaneProperties = {
  laneNumber: number,
  boardLength: number
}

const Lane: React.FC<LaneType & LaneProperties> = (props) => {
  const { title, cards, laneNumber, boardLength, addCard } = props
  const [card, setCard] = useState('')

  const handleAdd = () => {
    addCard(laneNumber, card)
    setCard('')
  }

  return (
    <Box basis='full' margin={{ left: 'xsmall', right: 'xsmall' }}>
      <Heading alignSelf='center' level={3}>{ title }</Heading>
      <Box
        direction='row'
        align='center'
        margin={{ bottom: 'medium' }}
      >
        <TextInput
          placeholder='Add Card'
          value={card}
          onChange={event => setCard(event.target.value)}
        />
        <Add onClick={() => handleAdd()}/>
      </Box>
      { cards.map((card: CardType, i: number) => <Card {...card} laneNumber={laneNumber} index={i} boardLength={boardLength} key={i}/>) }
    </Box>
  )
}

export default connect(null, { addCard })(Lane)
