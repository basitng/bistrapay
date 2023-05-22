import React from 'react';

function Hello() {
  return <p>Hello World</p>;
}

describe('Hello', () => {
  it('should render "Hello World"', () => {
    // render the component 
    const { getByText } = render(<Hello/>);
    // assert the component includes the provided text
    expect(getByText('Hello World')).toBeInTheDocument();
  });
});