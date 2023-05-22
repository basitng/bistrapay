// import React from 'react';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
};

export default App;

// Unit test using React Testing Library
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './_app'

describe('The App component', () => {
  test('Renders the counter', () => {
    render(<App />);
    // Assertions
    expect(screen.getByRole('heading')).toHaveTextContent('Count: 0')
  })

  test('Increments the counter', () => {
    render(<App />);
    screen.getByRole('button', {name: '+'}).click()
    
    // Assertions
    expect(screen.getByRole('heading')).toHaveTextContent('Count: 1')
  })

  test('Decrements the counter', () => {
    render(<App />);
    screen.getByRole('button', {name: '-'}).click()
    
    // Assertions
    expect(screen.getByRole('heading')).toHaveTextContent('Count: -1')
  })

})