import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { UsersContext } from './users.context';

describe('UsersContext', () => {
  afterEach(cleanup);

  it('should render the users context', () => {
    const user = [
      {
        id: 1,
        name: 'Bob',
        email: 'bob@example.com',
      },
      {
        id: 2,
        name: 'John',
        email: 'john@example.com',
      },
    ];

    const { queryByTestId } = render(
      <UsersContext.Provider value={user}>
        <div data-testid="users-context">
          {user &&
            user.map(({ id, name, email }) => (
              <div key={id} data-testid="user">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
              </div>
            ))}
        </div>
      </UsersContext.Provider>,
    );

    expect(queryByTestId('users-context')).toBeTruthy();
    expect(queryByTestId('user')).toBeTruthy();
    expect(queryByTestId('user').children.length).toEqual(2);
  });
});