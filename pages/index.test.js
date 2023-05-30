import React from 'react';

class TestComponent extends React.Component {
  state = {
    message: 'Hello World'
  }
  
  render() {
    return (
      <div>
        {this.state.message} 
      </div>
    )
  }
}

describe("TestComponent", () => {
  it("should render the message from state", () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('Hello World')).toBeInTheDocument();
  }); 
});