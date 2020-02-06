import React from 'react';
import { render } from '@testing-library/react';
import { renderWithRedux } from '../../testHelper'
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
    const { getAllByRole } = renderWithRedux(<Lane {...lane}/>)
    expect(getAllByRole('textbox').length).toEqual(5)
  })
})
