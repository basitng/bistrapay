import React from "react";
 
const DisplayComponent = () => {
  const [state, setState] = React.useState({
    name: '',
    isLoading: false
  });
 
  const handleClick = () => {
    setState({ isLoading: true, name: state.name });
  }; 
 
  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={event => setState({ name: event.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
      {state.isLoading && (
        <div>
          {state.name} is loading...
        </div>
      )}
    </div>
  );
};
 
export default DisplayComponent;

// Unit test for the above code using React-testing-library
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DisplayComponent from './DisplayComponent';

describe('Display Component', () => {
  it('Should set loading to true when button is clicked', () => {
    const { getByRole } = render(<DisplayComponent />);
    const input = getByRole('textbox');
    const submitButton = getByRole('button');

    fireEvent.change(input, { target: { value: 'hello' } });

    expect(input.value).toBe('hello');
    fireEvent.click(submitButton);
    expect(getByRole('textbox').value).toBe('hello')
    expect(getByRole('textbox').value).toBe('hello is loading...')
  });

});