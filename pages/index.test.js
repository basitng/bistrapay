import React from 'react'; 
import { render, screen } from '@testing-library/react';

describe('pages/index.js', () => {
  it('displays the welcome message', () => {  
    render(<div>Welcome to my web page</div>);
    const welcomeMessage = screen.getByText('Welcome to my web page');
    expect(welcomeMessage).toBeInTheDocument();
  });
});