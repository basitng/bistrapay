import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Manage from './Manage';

describe('Test Manage Page', () => {
  afterEach(cleanup);

  it('should render the manage page', () => {
    const { getByTestId } = render(<Manage />);
    expect(getByTestId('manage-page-container')).toBeInTheDocument();
  });

  it('should feed the state on input change', () => {
    const { getByTestId, getByLabelText } = render(<Manage />);
    fireEvent.change(getByLabelText('Name'), { target: { value: 'Today' } });
    expect(getByTestId('manage-page-container').state.name).toBe('Today');
  });

  it('should add a new item when the add item button is clicked', () => {
    const { getByTestId, getByText } = render(<Manage />);
    fireEvent.click(getByText('Add new item'));
    expect(getByTestId('manage-page-container').state.items.length).toBe(1);
  });
  
  it('should delete an item when the delete item button is clicked', () => {
    const { getByTestId, getByText } = render(<Manage />);
    fireEvent.click(getByText('Add new item'));
    fireEvent.click(getByText('Delete item'));
    expect(getByTestId('manage-page-container').state.items.length).toBe(0);
  });
});