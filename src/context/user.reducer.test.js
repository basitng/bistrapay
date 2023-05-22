import React from 'react';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import userReducer from './user.reducer';

describe('user reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      users: [
        {
          id: "9609ab1d-b2b8-4a5f-a9d3-3a3a390a19e8",
          email: "doug@example.com",
          username: "doug"
        }
      ]
    };
  });

  it('should add a new user', () => {
    const action = {
      type: 'CREATE_USER',
      payload: {
        id: '123123asd',
        email: 'test@example.com',
        username: 'testuser'
      }
    };

    // Act 
    const newState = userReducer(state, action);

    // Assert
    expect(newState.users).toHaveLength(2);
    expect(newState.users[1].id).toBe('123123asd');
    expect(newState.users[1].email).toBe('test@example.com');
    expect(newState.users[1].username).toBe('testuser');
  });
});