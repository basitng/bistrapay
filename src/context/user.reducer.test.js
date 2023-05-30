import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import userReducer from './user.reducer';

// Your Code - Unit Test
// Using react-testing-library

describe("User Reducer Unit Test", () => {
  let initialState
  beforeEach(() => {
    initialState={
      userInfo: null,
      loading: false
    };
  });

it("Should return initial state", () => {
  const newState = userReducer(initialState, {});
  expect(newState).toEqual(initialState);
})

it("Should return new state if receiving type", () => {
  const newState = userReducer(initialState, {
    type: "USER_LOADING",
    payload: true
  });
  expect(newState).toEqual({userInfo: null, loading: true});
})

it("Should return new state if receiving type", () => {
  const payload = {
    id: 1,
    name: "John Doe"
  }
  const newState = userReducer(initialState, {
    type: "USER_INFO",
    payload
  });
  expect(newState).toEqual({userInfo: payload, loading: false});
})
});