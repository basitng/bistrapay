import React from 'react';
import { userReducer } from './user.reducer';

describe('userReducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      loading: false,
      user: undefined,
    });
  });

  it('should handle USER_REQUEST', () => {
    expect(
      userReducer({ loading: false, user: undefined }, { type: 'USER_REQUEST' })
    ).toEqual({
      loading: true,
      user: undefined,
    });
  });

  it('should handle USER_SUCCESS', () => {
    expect(
      userReducer(
        { loading: true, user: undefined },
        { type: 'USER_SUCCESS', payload: { name: 'John Doe' } }
      )
    ).toEqual({
      loading: false,
      user: { name: 'John Doe' },
    });
  });

  it('should handle USER_FAILURE', () => {
    expect(
      userReducer({ loading: true, user: undefined }, { type: 'USER_FAILURE' })
    ).toEqual({
      loading: false,
      user: undefined,
    });
  });
});