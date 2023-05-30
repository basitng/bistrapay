import React from 'react';

function App() {
  return (
    <>
      <h1>Welcome to my React App</h1>
      <button>Click Me!</button>
    </>
  );
}

export default App;

// Using React Testing Library
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

test('renders correctly', () => {
  render(<App />);

  const title = screen.getByText('Welcome to my React App');
  const button = screen.getByText('Click Me!');

  expect(title).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
});