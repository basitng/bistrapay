import React from "react";
import { render } from "@testing-library/react";
import {UserReducer} from "../reducers/user.reducer";

describe('User Reducer', () => {
  it('should return the initial state', () => {
    expect(UserReducer(undefined, {})).toEqual({
      user: null,
      token: null
    });
  });
  it('should handle SET_USER', () => {
    const payload = {
      user: { name: 'John' },
      token: 'testToken'
    };
    expect(
      UserReducer(undefined, {
        type: 'SET_USER',
        payload
      })
    ).toEqual({
      user: { name: 'John' },
      token: 'testToken'
    });
  });
  it('should handle LOGOUT', () => {
    expect(
      UserReducer(
        {
          user: { name: 'John' },
          token: 'testToken'
        }, {
          type: 'LOGOUT'
        })
    ).toEqual({
      user: null,
      token: null
    });
  });
});