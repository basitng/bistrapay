import React from 'react';

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        </div>
    )
};

export default Users;

// Unit Test for Users Component
import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test('Users component should render the header and a list of 3 users', () => {
  render(<Users />);

  // Assert that the header is rendered
  expect(screen.getByText('Users')).toBeInTheDocument();

  // Assert that the 3 users are rendered
  expect(screen.getByText('User 1')).toBeInTheDocument();
  expect(screen.getByText('User 2')).toBeInTheDocument();
  expect(screen.getByText('User 3')).toBeInTheDocument();
});