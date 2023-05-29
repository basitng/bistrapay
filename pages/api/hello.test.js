import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Hello from './hello';

describe('Hello', () => {
   test('renders hello world', () => {
     const { getByText } = render(<Hello />);
     const linkElement = getByText('Hello World');
     expect(linkElement).toBeInTheDocument();
   });

   test('fire event', () => {
     const { getByText } = render(<Hello />);
     const buttonElement = getByText('CLick Me!');
     fireEvent.click(buttonElement);
     expect(buttonElement).toBeInTheDocument();
   });
});