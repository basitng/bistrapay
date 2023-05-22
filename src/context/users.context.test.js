import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { UsersContext } from './users.context';

let store;

// Mock this function for testing
const setUserName = jest.fn();
const getUserName = jest.fn();

beforeEach(() => {
  store = {
    userName: 'Bob',
    setUserName,
    getUserName
  };
});

afterEach(cleanup);

describe('UsersContext Component', () => {
  it('renders the UsersContext provider with the store context', () => {
    const { getByText } = render(
      <UsersContext.Provider value={store}>
        <div>Hello Bob!</div>
      </UsersContext.Provider>
    );
    expect(getByText('Hello Bob!')).toBeInTheDocument();
  });

  it('calls the setUserName when it is changed', () => {
    const { getByTestId } = render(
      <UsersContext.Provider value={store}>
        <input type="text" id="userNameInput" data-testid="userNameInput" onChange={() => setUserName('Betty')} />
      </UsersContext.Provider>
    );

    const input = getByTestId('userNameInput');

    fireEvent.change(input, { target: { value: 'Betty' } });

    expect(setUserName).toHaveBeenCalledWith('Betty');
  });

  it('calls the getUserName function', () => {
    render(
      <UsersContext.Provider value={store}>
        <button onClick={() => getUserName()} />
      </UsersContext.Provider>
    );

    expect(getUserName).toHaveBeenCalled();
  });
});