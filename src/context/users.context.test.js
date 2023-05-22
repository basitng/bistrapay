import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UsersContext } from './users.context';

describe('UsersContext', () => {
  it('should render the context properly', () => {
    const initialState = {
      users: [],
      isLoading: true
    };
    
    const { getByTestId } = render(
      <UsersContext.Provider value={initialState}>
        <div data-testid="context-wrapper">
          <h1>Users Context</h1>
        </div>
      </UsersContext.Provider>
    );

    const contextWrapper = getByTestId('context-wrapper');
    expect(contextWrapper).toBeInTheDocument();
  });

  it('should update state when an action is fired', () => {
    const initialState = {
      users: [],
      isLoading: true
    };
    
    const mockAction = {
      type: 'set-users',
      payload: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ]
    };
    
    const reducer = (state, action) => {
      switch (action.type) {
        case 'set-users':
          return {
            ...state,
            users: action.payload,
            isLoading: false
          };
        default:
          return state;
      }
    }
    
    const { getByTestId } = render(
      <UsersContext.Provider value={{...initialState, reducer}}>
        <div data-testid="context-wrapper">
          <h1>Users Context</h1>
        </div>
      </UsersContext.Provider>
    );
    
    fireEvent.click(getByTestId('context-wrapper'));
    expect(initialState.isLoading).toBe(false);
    expect(initialState.users).toEqual(mockAction.payload);
  });
});