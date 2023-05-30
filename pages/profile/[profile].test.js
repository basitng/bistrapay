import React from 'react'

export const Profile = (props) => {
    const { name } = props;

    return (
        <div>
            <h1>Profile of {name}</h1>
            <p>This is the profile page of {name}.</p>
        </div>
    )
};

import { render, screen } from '@testing-library/react';
import { Profile } from './pages/profile/[profile].js'
 
describe('Profile', () => {
  it('should render the name in the h1 tag', () => {
    const name = 'John';
    render(<Profile name={name} />);
    expect(screen.getByText(/John/)).toBeInTheDocument()
  });
});