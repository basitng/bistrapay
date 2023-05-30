import React from 'react';
import { reducer, initialState } from "../context/user.reducer";
import { LOGIN_SUCCESS, LOGOUT } from '../constants';

describe('user reducer', () => {
    it('should set loggedin to true when LOGIN_SUCCESS is called', () => {
        const action = {
            type: LOGIN_SUCCESS
        }

        const expectedState = {
            ...initialState,
            loggedIn: true
        }

        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('should set loggedin to false when LOGOUT is called', () => {
        state = {
            ... initialState,
            loggedIn: true
        }
        const action = {
            type: LOGOUT
        }

        const expectedState = {
            ...state,
            loggedIn: false
        }

        expect(reducer(state, action)).toEqual(expectedState);
    });
});