import { userReducer, initialState } from './user.reducer';
import {
    updateUsername,
    updateEmail,
    updatePassword
} from './user.actions';

// Set up test library or framework
describe('userReducer', () => {
    it('should return initial state', () => {
        expect(userReducer(undefined, {}))
            .toEqual(initialState);
    });

    it('should handle updateUsername action', () => {
        const action = {
            type: updateUsername,
            payload: 'John Smith'
        };
        const expectedState = {
            ...initialState,
            username: 'John Smith'
        };

        expect(userReducer(undefined, action))
            .toEqual(expectedState);
    });

    it('should handle updateEmail action', () => {
        const action = {
            type: updateEmail,
            payload: 'john.smith@example.com'
        };
        const expectedState = {
            ...initialState,
            email: 'john.smith@example.com'
        };

        expect(userReducer(undefined, action))
            .toEqual(expectedState);
    });

    it('should handle updatePassword action', () => {
        const action = {
            type: updatePassword,
            payload: '123456'
        };
        const expectedState = {
            ...initialState,
            password: '123456'
        };

        expect(userReducer(undefined, action))
            .toEqual(expectedState);
    });
});