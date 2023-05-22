import React from 'react';
import { render, screen } from '@testing-library/react'; 

test('user component is rendered', () => {
  render(<User />);
  
  expect(screen.getByText('Username: John Doe')).toBeInTheDocument(); 
  expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
  expect(screen.getByText('john.doe@example.com')).toBeInTheDocument(); 
});