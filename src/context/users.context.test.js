import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  name: 'John Doe',
  email: 'john@example.com',
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setEmail':
      return { ...state, email: action.email }; 
    default:
      return state;
  }
};

export const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, initialState);
  return <UserContext.Provider value={{ user, dispatch }} {...props} />;
};

// Unit test
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserContextProvider, UserContext, userReducer } from './users.context';

describe('Test user context reducer', () => {
  it('Should set the name in the state', () => {
    const action = {
      type: 'setName',
      name: 'Jane Doe',
    };

    const result = userReducer(initialState, action);

    expect(result.name).toBe('Jane Doe');
  });

  it('Should set the email in the state', () => {
    const action = {
      type: 'setEmail',
      email: 'jane@example.com',
    };

    const result = userReducer(initialState, action);

    expect(result.email).toBe('jane@example.com');
  });
});

describe('Test user context provider', () => {
  it('Should render  its children', () => {
    render(
      <UserContextProvider>
        <div>Test</div>
      </UserContextProvider>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('Should dispatch changes to the context state', () => {
    const TestChild = () => {
      const { dispatch } = React.useContext(UserContext);

      return <button onClick={() => dispatch({ type: 'setName', name: 'John Doe' })}>Dispatch</button>;
    };

    render(
      <UserContextProvider>
        <TestChild />
      </UserContextProvider>
    );

    const button = screen.getByText('Dispatch');
    fireEvent.click(button);

    const { contacts } = React.useContext(UserContext);
    expect(contacts.user.name).toBe('John Doe');
  });
});