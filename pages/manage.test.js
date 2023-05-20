import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Manage from './pages/manage';

describe('Manage page', () => {
  it('should render correctly', async () => {
    const { getByTestId } = render(<Manage />);
    const pageTitle = getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.textContent).toBe('Manage');
  });

  it('should submit the form correctly', async () => {
    const { getByTestId, getByLabelText } = render(<Manage />);
    const nameInput = getByLabelText('Name');
    const submitButton = getByTestId('submit-button');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.click(submitButton);
    await waitFor(() => expect(getByTestId('form-submitted')).toBeInTheDocument());
  });

  it('should display an error message when the form is submitted with empty fields', async () => {
    const { getByTestId, getByLabelText } = render(<Manage />);
    const submitButton = getByTestId('submit-button');
    fireEvent.click(submitButton);
    await waitFor(() => expect(getByTestId('error-message')).toBeInTheDocument());
  });

  it('should update the state correctly when props change', async () => {
    const { getByTestId, getByLabelText } = render(<Manage />);
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    const stateValue = getByTestId('state-value');
    expect(stateValue.textContent).toBe('John Doe');
  });

  it('should call the handleSubmit function when the form is submitted', async () => {
    const mockHandleSubmit = jest.fn();
    const { getByTestId, getByLabelText } = render(<Manage handleSubmit={mockHandleSubmit} />);
    const nameInput = getByLabelText('Name');
    const submitButton = getByTestId('submit-button');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.click(submitButton);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('should render the expected UI elements', async () => {
    const { getByTestId } = render(<Manage />);
    const pageTitle = getByTestId('page-title');
    const form = getByTestId('form');
    const formFields = getByTestId('form-fields');
    const submitButton = getByTestId('submit-button');
    expect(pageTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(formFields).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should display the error message when an API call fails', async () => {
    const mockHandleError = jest.fn();
    const { getByTestId } = render(<Manage handleError={mockHandleError} />);
    await waitFor(() => expect(getByTestId('error-message')).toBeInTheDocument());
  });
});