import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component', () => {
  it('should render the profile name', () => {
    const { getByText } = render(<Profile name="John Doe" />);
    const profileName = getByText('John Doe');
    expect(profileName).toBeInTheDocument();
  });

  it('should render a button to edit the profile', () => {
    const { getByTestId } = render(<Profile />);
    const editButton = getByTestId('edit-button');
    expect(editButton).toBeInTheDocument();
    expect(editButton.textContent).toBe('Edit Profile');
  });

  it('should call the onEdit prop when the edit button is clicked', () => {
    const onEditMock = jest.fn();
    const { getByTestId } = render(<Profile onEdit={onEditMock} />);
    const editButton = getByTestId('edit-button');
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalledTimes(1);
  });
});