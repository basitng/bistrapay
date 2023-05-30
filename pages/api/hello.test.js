import React from 'react'; 
import { render } from '@testing-library/react'; 
import App from './App'; 

describe('App', () => {
  it('renders the hello world message', () => { 
    const { getByText } = render(<App />); 
    const helloWorldMessage = getByText('Hello World'); 
    expect(helloWorldMessage).toBeInTheDocument(); 
  });
});