import React from 'react';

class ManagePage extends React.Component {

  state = {
    text: '',
    isActive: false
  };

  handleTextChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmitForm = () => {
    if (this.state.text.trim().length > 4) {
      this.setState({ isActive: true });
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
        </div>
        <button onClick={this.handleSubmitForm} disabled={!this.state.isActive}>
          Submit
        </button>
      </div>
    );
  }
}

export default ManagePage;


import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

describe('ManagePage', () => {
    it('should enable the submit button when enough characters have been entered', () => {
        const { getByText, container, getByPlaceholderText } = render(<ManagePage />);
        const input = getByPlaceholderText("Enter text...");
        const submitButton = getByText('Submit');

        expect(submitButton.disabled).toEqual(true);

        act(() => {
            fireEvent.change(input, { target: { value: 'test' } });
        });
        expect(input.value).toEqual('test');
        expect(submitButton.disabled).toEqual(false);
    });
});