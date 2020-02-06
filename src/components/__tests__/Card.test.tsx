import React from 'react';
import { fireEvent, act } from '@testing-library/react';
import { renderWithRedux } from '../../testHelper'
import Card from '../Card';

const mockClick = jest.fn()

const card = {
  text: 'Lorem ipsum',
  laneNumber: 1,
  boardLength: 3,
  index: 0
}

afterEach(() => mockClick.mockClear())

describe('<Card/>', () => {
  test('renders both carets', () => {
    const { container } = renderWithRedux(<Card {...card}/>)
    const carets = container.querySelectorAll('svg')
    expect(carets.length).toEqual(2)
  })
})

