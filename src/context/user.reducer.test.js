import React from "react";

import { reducer, userReducer, initialState } from "./user.reducer";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USER,
} from "./user.actions";

describe("User Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state when action type is not found", () => {
    expect(reducer(initialState, { type: "SOME_ACTION" })).toEqual(initialState);
  });
  
  it("should update state correctly when FETCH_USERS_REQUEST is dispatched", () => {
    expect(
      reducer(initialState, { type: FETCH_USERS_REQUEST })
    ).toEqual({ loading: true, users: [] });
  });

  it("should update state correctly when FETCH_USERS_SUCCESS is dispatched", () => {
    const users = [
      { id: 1, name: "Betty Hall" },
      { id: 2, name: "Cal Thomas" }
    ];
    expect(
      reducer(initialState, {
        type: FETCH_USERS_SUCCESS,
        payload: { data: users }
      })
    ).toEqual({ loading: false, users });
  });

  it("should update state correctly when FETCH_USERS_FAILURE is dispatched", () => {
    const error = "Failed to fetch users";
    expect(
      reducer(initialState, { type: FETCH_USERS_FAILURE, payload: { error } })
    ).toEqual({ loading: false, users: [], error });
  });

  it("should update state correctly when UPDATE_USER is dispatched", () => {
    const oldUsers = [
      { id: 1, name: "Betty Hall" },
      { id: 2, name: "Cal Thomas" }
    ];
    const newUserData = { id: 1, name: "Bob Hall" };
    const expectedUsers = [
      { id: 1, name: "Bob Hall" },
      { id: 2, name: "Cal Thomas" }
    ];
    expect(
      reducer({ loading: false, users: oldUsers }, {
        type: UPDATE_USER,
        payload: { data: newUserData, id: 1 }
      })
    ).toEqual({ loading: false, users: expectedUsers });
  });
});

// Unit Tests with React Testing Library

import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { reducer, userReducer, initialState } from './user.reducer';
import { 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE, 
    UPDATE_USER
 } from './user.actions';
 
 describe("User Reducer", () => {
     afterEach(cleanup);
     
     it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
     });
     
     it('should return the initial state when action type is not found', () => {
        expect(reducer(initialState, {type: "SOME_ACTION"})).toEqual(initialState);
     });
     
     it('should update state correctly when FETCH_USERS_REQUEST is dispatched', () => {
        expect(reducer(initialState, { type: FETCH_USERS_REQUEST })).toEqual({ loading: true, users: [] });
     });
     
     it('should update state correctly when FETCH_USERS_SUCCESS is dispatched', () => {
        const users = [
            {id: 1, name: 'Betty Hall'},
            {id: 2, name: 'Cal Thomas'}
        ];
        expect(reducer(initialState, { type: FETCH_USERS_SUCCESS, payload: {data: users} })).toEqual({ loading: false, users }); 
     });
     
     it('should update state correctly when FETCH_USERS_FAILURE is dispatched', () => {
        const error = 'Failed to fetch users';
        expect(reducer(initialState, { type: FETCH_USERS_FAILURE, payload: {error} })).toEqual({ loading: false, users: [], error }); 
     });
     
     it('should update state correctly when UPDATE_USER is dispatched', () => {
        const oldUsers = [
            {id: 1, name: 'Betty Hall'},
            {id: 2, name: 'Cal Thomas'}
        ];
        const newUserData = {id: 1, name: 'Bob Hall'};
        const expectedUsers = [
            {id: 1, name: 'Bob Hall'},
            {id: 2, name: 'Cal Thomas'}
        ];
        expect(reducer({ loading: false, users: oldUsers }, {type: UPDATE_USER, payload: {data: newUserData, id: 1}})).toEqual({ loading: false, users: expectedUsers }); 
     });
 });