import React from 'react';
import { render } from '@testing-library/react';
import Profile from './pages/profile/[profile]';

describe('Profile Component', () => {
  it(' Should render properly', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('Profile Page')).toBeInTheDocument();
  });

  it('should show profile section when appropriate value is passed', () => {
    const { getByText } = render(<Profile isProfileView={true} />);
    
    expect(getByText('View Profile')).toBeInTheDocument();
  });
});