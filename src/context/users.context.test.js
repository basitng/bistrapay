import React, { createContext, useContext } from "react";

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ initialState, children }) => {
  const [user, setUser] = React.useState(initialState);

  const setUserDetails = user => {
    setUser({
      ...user
    });
  };

  return (
    <UserContext.Provider value={{ user, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

// Test
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { UserProvider, useUser } from './users.context';

const setup = () => {
  const Ul = () => {
    const userContext = useUser();

    return (
      <div>
        <button onClick={() => userContext.setUserDetails({ name: 'Ellis' })}>
          Set User
        </button>
        <span>{userContext.user.name}</span>
      </div>
    );
  };

  const { container } = render(
    <UserProvider initialState={{ name: 'Sven' }}>
      <Ul />
    </UserProvider>
  );

  const button = container.querySelector('button');
  const name = container.querySelector('span');

  return {
    button,
    name
  };
};

describe('User Context', () => {
  it('should update user name when button is clicked', async () => {
    const { button, name } = setup();

    // Simulate click on button
    await act(async () => {
      fireEvent.click(button);
    });

    // Assert user is updated
    expect(name.textContent).toBe('Ellis');
  });
});