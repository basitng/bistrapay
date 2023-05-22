import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hello from './hello';

describe('Hello', () => {
  afterEach(cleanup);

  it('renders the correct message', () => {
    const { getByTestId } = render(<Hello />);
    expect(getByTestId('message')).toHaveTextContent('Hello World!');
  });
});