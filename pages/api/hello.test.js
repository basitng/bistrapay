import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Hello from './hello.js';

afterEach(cleanup); // Unmounts React trees that were rendered and cleans up the DOM

test('renders Hello world text', () => {
  const { getByText } = render(<Hello />);
  expect(getByText('Hello World!')).toBeInTheDocument() ;
});