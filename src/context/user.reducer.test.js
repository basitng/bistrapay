import React from 'react';
    import {userReducer, initialState} from './user.reducer';

    describe('User Reducer', () => {
        it('should return initial state when no action is passed', () => {
            expect(userReducer(undefined, {})).toEqual(initialState);
        });

        it('should handle GET_USER action correctly', () => {
            const getUserAction = {
                type: 'GET_USER',
                payload: {
                    id: '123',
                    username: 'JohnDoe'
                }
            }
            expect(userReducer(undefined, getUserAction)).toEqual({
                user: {
                    id: '123',
                    username: 'JohnDoe'
                }
            });
        });

        it('should handle LOGOUT_USER action correctly', () => {
            const logoutUserAction = {
                type: 'LOGOUT_USER'
            }
            expect(userReducer(undefined, logoutUserAction)).toEqual({
                user: {}
            });
        });
    });