import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../redux/actions'
import { Header as Bar, Box, TextInput } from 'grommet'
import { Add } from 'grommet-icons'

const Header: React.FC<{ addCard: any }> = ({ addCard }) => {
  const [card, setCard] = useState('')

  const handleAdd = () => {
    addCard(card)
    setCard('')
  }

  return (
    <Bar
      background='brand'
      pad='small'
    >
      <Box
        direction='row'
        align='center'
      >
        <TextInput
          placeholder='Add Card'
          value={card}
          onChange={event => setCard(event.target.value)}
        />
        <Add onClick={() => handleAdd()} />
      </Box>
    </Bar>
  )
}

export default connect(null, { addCard })(Header)
