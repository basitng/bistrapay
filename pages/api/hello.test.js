import React from 'react';

const Hello = () => {
  return <h1>Hello!</h1>;
};

export default Hello;

import {render, screen} from '@testing-library/react';

describe('Hello', () => {
  it('should render hello', () => {
    render(<Hello />);
    expect(screen.getByText('Hello!')).toBeInTheDocument();
  });
});