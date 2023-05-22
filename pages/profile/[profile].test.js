import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Profile from './profile';

describe('Profile', () => {
  it('displays a display name when given', () => {
    // Arrange
    const displayName = 'John Doe';

    // Act
    const { getByText } = render(<Profile displayName={displayName} />);

    // Assert
    const displayNameElement = getByText(displayName);
    expect(displayNameElement).toBeInTheDocument();
  });

  it('changes the display name when clicked', () => {
    // Arrange
    const initialDisplayName = 'John Doe';
    const changedDisplayName = 'Jane Doe';

    // Act
    const { getByText, getByTestId } = render(<Profile displayName={initialDisplayName} />);

    fireEvent.click(getByTestId('change-name-button'));

    // Assert
    const displayNameElement = getByText(changedDisplayName);
    expect(displayNameElement).toBeInTheDocument();
  });
});