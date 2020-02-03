import React from 'react';
import { render } from '@testing-library/react';
import Lane from '../Lane';

const card = {
  text: 'Lorem ipsum',
}

const lane = {
  title: 'To Do',
  cards: Array(5).fill(card),
  laneNumber: 0,
  boardLength: 3
}

describe('<Lane/>', () => {
  test('renders the correct number of cards', () => {
    const { debug, getAllByRole } = render(<Lane {...lane}/>)
    expect(getAllByRole('textbox').length).toEqual(5)
  })
})
