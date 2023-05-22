import { userReducer } from './user.reducer';
    import {
    LOGIN_USER_REQUEST, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS
    } from '../actions/user.action';

import { act } from "@testing-library/react";

describe("User Reducer", () => {
  let state;

  beforeEach(() => {
    state = {
      loading: false,
      user: null,
      error: "",
    };
  });

  it("LOGIN_USER_REQUEST", () => {
    const action = {
      type: LOGIN_USER_REQUEST,
    };
    const result = userReducer(state, action);
    expect(result).toEqual({
      loading: true,
      user: null,
      error: "",
    });
  });

  it("LOGIN_USER_FAILED", () => {
    const payload = {
      message: "error occuered",
    };
    const action = {
      type: LOGIN_USER_FAILED,
      payload,
    };
    const result = userReducer(state, action);
    expect(result).toEqual({
      loading: false,
      user: null,
      error: payload.message,
    });
  });

  it("LOGIN_USER_SUCCESS", () => {
    const payload = {
      name: "John Doe",
      email: "john@doe.com",
    };
    const action = {
      type: LOGIN_USER_SUCCESS,
      payload,
    };
    const result = userReducer(state, action);
    expect(result).toEqual({
      loading: false,
      user: payload,
      error: "",
    });
  });
});