import React from 'react';
    
    describe('UserReducer', () => {
        it('should update user info', () => {
            const user = {id: 1};
            const action = {type: 'UPDATE_USER', payload:  'name'};
            expect(UserReducer(user, action))
                .toEqual({id: 1, name: 'name'})
        });
    });