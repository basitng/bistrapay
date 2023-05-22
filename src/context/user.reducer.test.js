import React from 'react';
import { userReducer } from './user.reducer';

describe('userReducer', () => {
  test('initial state', () => {
    const expectedState = {
      userName: '',
      isLoggedIn: false
    };
    expect(userReducer(undefined, {})).toEqual(expectedState);
  });

  test('LOGIN', () => {
    const action = {
      type: 'LOGIN',
      payload: { userName: 'John' }
    };
    const expectedState = {
      userName: 'John',
      isLoggedIn: true
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });
  
  test('LOGOUT', () => {
    const action = {
      type: 'LOGOUT'
    };
    const expectedState = {
      userName: '',
      isLoggedIn: false
    };
    expect(userReducer(undefined, action)).toEqual(expectedState);
  });
});