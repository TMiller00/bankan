import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  test('renders the board', () => {
    const { container } = render(<App/>)
    expect(container.querySelectorAll('h3').length).toEqual(4)
  })
})

