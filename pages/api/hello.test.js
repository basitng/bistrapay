import React from 'react';
import { render } from '@testing-library/react';

test('Renders Hello Page', () => {
  const { asFragment } = render(<h1>Hello</h1>);
  expect(asFragment()).toMatchSnapshot(); 
});