import { userReducer } from '../reducers/user.reducer';

    describe('userReducer test', () => {
        test('returns the initial state', () => {
            expect(userReducer(undefined, {})).toEqual({userList:[]});
        });

        test('adds new users to userList state', () => {
            const user = {
                id: '123',
                name: 'John Doe'
            };
            const expectedResult = {
                userList: [user]
            };

            expect(userReducer(undefined, {type: ADD_USER, user})).toEqual(expectedResult);
        });

        test('Removing users from userList state', () => {
            const user = {
                id: '123',
                name: 'John Doe'
            };
            const initialState = {
                userList: [user]
            };

            const expectedResult = {
                userList: []
            };

            expect(userReducer(initialState, {type: REMOVE_USER, user})).toEqual(expectedResult);
        });
    });