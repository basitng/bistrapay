import React from 'react';
 
function UsersList({ users }) {
    return (
        <ul className="users-list">
            {users.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    );
}

// Test using react-testing-library
import {render, screen} from '@testing-library/react'
 
describe('UsersList Component Test', () => {
    test('Check users list is rendered correctly', () => {
        const mockUsers = [{name: 'John Doe'}, {name: 'Tim Smith'}];
 
        render(<UsersList users={mockUsers} />);
 
        const usersItems = screen.getAllByTestId('user-item');
 
        expect(usersItems.length).toBe(mockUsers.length);
        expect(usersItems[0].innerHTML).toBe(mockUsers[0].name);
        expect(usersItems[1].innerHTML).toBe(mockUsers[1].name);
    });
});