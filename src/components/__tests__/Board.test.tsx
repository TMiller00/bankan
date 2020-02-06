import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithRedux } from '../../testHelper'
import Board from '../Board';

describe('<Board/>', () => {
  test('renders the correct number of lanes', () => {
    const { container } = renderWithRedux(<Board/>)
    expect(container.querySelectorAll('h3').length).toEqual(4)
  })
})

