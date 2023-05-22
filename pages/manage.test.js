import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Manage from './Manage';

describe('Manage', () => {
  it('should render the component', () => {
    const { getByText } = render(<Manage />);
    expect(getByText(/Manage/i)).toBeInTheDocument();
  });

  it('should render the expected components', () => {
    const { getByText, getByLabelText, getByTestId } = render(<Manage />);
    expect(getByText(/Manage/i)).toBeInTheDocument();
    expect(getByLabelText(/Username/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    expect(getByTestId('submit-btn')).toBeInTheDocument();
  });

  it('should handle submit button click', () => {
    const { getByText, getByLabelText, getByTestId } = render(<Manage />);
    const usernameInput = getByLabelText(/Username/i);
    const passwordInput = getByLabelText(/Password/i);
    const submitBtn = getByTestId('submit-btn');

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    fireEvent.click(submitBtn);

    expect(getByText(/Success/i)).toBeInTheDocument();
  });
});