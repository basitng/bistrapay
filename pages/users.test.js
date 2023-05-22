import React from 'react';

const users = [
    {name: "John", age: 30, email: "john@example.com"},
    {name: "Mary", age: 25, email: "mary@example.com"}
];

const UserList = () => (
    <>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.name}>
                    <span>Name: {user.name} </span>
                    <span>Age: {user.age} </span>
                    <span>Email: {user.email} </span>
                </li>
            ))}
        </ul>
    </>
);

export default UserList;

// Unit Test
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from './users';

describe('UserList', () => {
    test('should render the list of users', () => {
        render(<UserList />);
        const title = screen.getByText('Users');
        const userNames = screen.getAllByText(/Name:/);
        const userAges = screen.getAllByText(/Age:/);
        const userEmails = screen.getAllByText(/Email:/);

        expect(title).toBeInTheDocument();
        expect(userNames).toHaveLength(2);
        expect(userAges).toHaveLength(2);
        expect(userEmails).toHaveLength(2);
    });
});