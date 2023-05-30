import React from 'react';
        import { shallow } from 'enzyme';
        import { userReducer } from './user.reducer';
        
        describe('userReducer', () => {
            test('should set an initial state', () => {
            const expectedState = {
                username: null,
                role: null
            };
            expect(userReducer(undefined, {})).toEqual(expectedState);
            });

            test('should return the current state if no valid actions have been made', () => {
                // Section for writing the unit test
            });

            test('should set username', () => {
                // Section for writing the unit test
            });

            test('should set role', () => {
                // Section for writing the unit test
            });
        });

// Test for returning the current state if no valid  actions have been made
const state = {
    username: "john",
    role: "admin"
};

expect(userReducer(state, { type: null })).toEqual(state);

// Test for setting username
const action = {
    type: 'SET_USERNAME',
    username: 'mark'
};
const expectedState = {
    username: 'mark',
    role: null
};

expect(userReducer(state, action)).toEqual(expectedState);

// Test for setting role
const action2 = {
    type: 'SET_ROLE',
    role: 'admin'
};

const expectedState2 = {
    username: "john",
    role: "admin"
};

expect(userReducer(state, action2)).toEqual(expectedState2);