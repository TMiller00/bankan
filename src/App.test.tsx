import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from './testHelper'

describe('<App/>', () => {
  test('renders the board', () => {
    const { container } = renderWithRedux(<App/>)
    expect(container.querySelectorAll('h3').length).toEqual(4)
  })
})

