import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../Card';

const card = {
  text: 'Lorem ipsum',
  laneNumber: 1,
  boardLength: 3
}

describe('<Card/>', () => {
  test('updates the value of the card', () => {
    const { getByRole } = render(<Card {...card}/>)
    const textbox = getByRole('textbox')
    fireEvent.change(textbox, { target: { value: 'A new value' }})
    expect(textbox).toHaveTextContent('A new value')
  })

  test('renders both carets', () => {
    const { container } = render(<Card {...card}/>)
    const carets = container.querySelectorAll('svg')
    expect(carets.length).toEqual(2)
  })
})

