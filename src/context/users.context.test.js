import React from 'react';

import { UserContext } from './users.context';

function UXComponent() {
  const { users, loading, error } = React.useContext(UserContext);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>;
}

// Unit Test
import React from 'react';
import { render,  fireEvent } from '@testing-library/react';
import { UserContext } from './users.context';
import UXComponent from './UXComponent';

describe('UX Component tests', ()=> {
  
    it('Render loading without crashing', ()=> {
        // Set up mock context
        const mockUsersContextValue = {
            users: [],
            loading: true,
            error: null
        } 
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => mockUsersContextValue)

        // Render the component
        const { getByText } = render(<UXComponent />);
        expect(getByText('Loading....')).toBeInTheDocument();
    });

    it('Render error without crashing', ()=> {
        // Set up mock context
        const mockUsersContextValue = {
            users: [],
            loading: false,
            error: { message: 'Error fetching users' }
        }
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => mockUsersContextValue)

        // Render the component
        const { getByText } = render(<UXComponent />);
        expect(getByText('Error: Error fetching users')).toBeInTheDocument();
    });

    it('Render list of users without crashing', ()=> {
        // Set up mock context
        const mockUsersContextValue = {
            users: [
                { id: 1, name: 'Myke' },
                { id: 2, name: 'John' }
            ],
            loading: false,
            error: null
        }
        jest
            .spyOn(React, 'useContext')
            .mockImplementation(() => mockUsersContextValue)

        // Render the component
        const { getByText } = render(<UXComponent />);
        expect(getByText('Myke')).toBeInTheDocument()
        expect(getByText('John')).toBeInTheDocument()
     });
});