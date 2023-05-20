import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Hello from './pages/api/hello';

describe('Hello', () => {
  test('renders with the expected UI elements', () => {
    const { getByText, getByTestId } = render(<Hello />);
    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(getByTestId('greeting-message')).toBeInTheDocument();
  });

  test('updates the greeting message when the input is changed', () => {
    const { getByText, getByTestId, getByLabelText } = render(<Hello />);
    expect(getByText('Hello World!')).toBeInTheDocument();
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' } });
    expect(getByText('Hello John!')).toBeInTheDocument();
    expect(getByTestId('greeting-message').value).toBe('Hello John!');
  });

  test('resets the greeting message when the reset button is clicked', () => {
    const { getByText, getByTestId, getByLabelText, getByText } = render(<Hello />);
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' } });
    expect(getByText('Hello John!')).toBeInTheDocument();
    fireEvent.click(getByText('Reset'));
    expect(getByText('Hello World!')).toBeInTheDocument();
    expect(getByTestId('greeting-message').value).toBe('Hello World!');
  });
});