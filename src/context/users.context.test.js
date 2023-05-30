import React from 'react';
import { UserContext } from './users.context';

const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async () => {
    const response = await fetch('/api/users');
    setUsers(response.data);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };


import { render, fireEvent, act } from '@testing-library/react';
import { UserProvider } from './users.context';

describe('UserContext', () => {
  it('should get users', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => {
          return Promise.resolve([{
            name: 'John Doe'
          }])
        }
      })
    );
  
    const { getByTestId } = render(
      <UserProvider>
        <div data-testid="user-name">John Doe</div>
      </UserProvider>
    );
  
    await act(async () => {
      await fireEvent.click(getByTestId('user-name'));
    });
  
    expect(global.fetch).toHaveBeenCalled();
  });
});