import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;

import { render } from '@testing-library/react';

describe('App', () => {
  test('render App component without crashing', () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/hello world/i);

    expect(h1).toBeInTheDocument();
  });
});