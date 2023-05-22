import React from 'react';
import { render } from '@testing-library/react';

function Hello(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

describe('Hello component', () => {
  it('should render a name correctly', () => {
    const { getByText } = render(<Hello name="John" />);
    const helloElement = getByText(/Hello, John!/i);
    expect(helloElement).toBeInTheDocument();
  });
});