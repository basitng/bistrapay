import React from 'react';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <p>This page displays all registered users on the app.</p>
    </div>
  );
};

export default Users;

// Unit Test
import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './users';

describe('Users', () => {
  it('should render a Users page', () => {
    render(<Users />);
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('This page displays all registered users on the app.')).toBeInTheDocument();
  });
});