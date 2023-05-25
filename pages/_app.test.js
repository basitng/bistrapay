//import React from 'react';
import { render } from '@testing-library/react';
import App from './_app';

test('submit button should match the label', () => {
  const { getByTestId } = render(<App />);
  const buttonElement = getByTestId('submit-button');
  
  expect(buttonElement).toHaveTextContent('Submit');
});