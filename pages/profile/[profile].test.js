import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Profile from './profile';

describe('Profile', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = render(<Profile />);
    const profileComponent = getByTestId('profile-component');
    expect(profileComponent).toBeInTheDocument();
  });

  it('should update the name when a new name is entered', () => {
    const { getByLabelText, getByTestId } = render(<Profile />);
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(getByTestId('name-field').textContent).toBe('John Doe');
  });

  it('should update the age when a new age is entered', () => {
    const { getByLabelText, getByTestId } = render(<Profile />);
    const ageInput = getByLabelText('Age');
    fireEvent.change(ageInput, { target: { value: '35' } });
    expect(getByTestId('age-field').textContent).toBe('35');
  });

  it('should display an error message when an invalid age is entered', () => {
    const { getByLabelText, getByTestId, getByText } = render(<Profile />);
    const ageInput = getByLabelText('Age');
    fireEvent.change(ageInput, { target: { value: '-1' } });
    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByText('Age must be a positive number.')).toBeInTheDocument();
  });

  it('should update the profile picture when a new image is selected', () => {
    const { getByTestId, getByAltText } = render(<Profile />);
    const profileImage = new File(['foo'], 'profile.jpg', { type: 'image/jpeg' });
    const profileImageInput = getByTestId('profile-image-input');
    fireEvent.change(profileImageInput, { target: { files: [profileImage] } });
    expect(getByAltText('Profile')).toBeInTheDocument();
  });

  it('should display an error message when an invalid image is selected', () => {
    const { getByTestId, getByText } = render(<Profile />);
    const invalidImage = new File(['foo'], 'invalid.txt', { type: 'text/plain' });
    const profileImageInput = getByTestId('profile-image-input');
    fireEvent.change(profileImageInput, { target: { files: [invalidImage] } });
    expect(getByText('Only images are allowed.')).toBeInTheDocument();
  });
});