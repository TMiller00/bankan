import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from '../Board';

const card = {
  text: 'Lorem ipsum',
}

const lane = {
  title: 'To Do',
  cards: Array(5).fill(card),
}

const board = {
  board: Array(4).fill(lane)
}

describe('<Board/>', () => {
  test('renders the correct number of lanes', () => {
    const { container } = render(<Board {...board}/>)
    expect(container.querySelectorAll('h3').length).toEqual(4)
  })
})

