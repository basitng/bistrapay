import React from "react";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
    </>
  );
};

export default App;

// Test using the React Testing Library
import { render } from '@testing-library/react';

test('App render correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('App Component')).toBeInTheDocument();
});