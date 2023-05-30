import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import { UserReducer } from './user.reducer';

describe('UserReducer', () => {
    afterEach(cleanup);

    const initialState = {
        userName: '',
        userId: '',
        isLoggedIn: false,
    };

    it('should return the initial state when no action is provided', () => {
        const newState = UserReducer(undefined, {});
        expect(newState).toEqual(initialState);
    });

    it('should set username when action type is SET_USERNAME', () => {
        const testUserName = 'TestUser';
        const action = {
            type: 'SET_USERNAME',
            userName: testUserName,
        };
        const resultState = { ...initialState, userName: testUserName };
        const newState = UserReducer(undefined, action);
        expect(newState).toEqual(resultState);
    });

    it('should set userId when action type is SET_USER_ID', () => {
        const testUserId = '123';
        const action = {
            type: 'SET_USER_ID',
            userId: testUserId,
        };
        const resultState = { ...initialState, userId: testUserId };
        const newState = UserReducer(undefined, action);
        expect(newState).toEqual(resultState);
    });

    it('should set isLoggedIn when action type is SET_IS_LOGGED_IN', () => {
        const testIsLoggedIn = true;
        const action = {
            type: 'SET_IS_LOGGED_IN',
            isLoggedIn: testIsLoggedIn,
        };
        const resultState = { ...initialState, isLoggedIn: testIsLoggedIn };
        const newState = UserReducer(undefined, action);
        expect(newState).toEqual(resultState);
    });
});