import React from 'react';
    import {mount} from 'enzyme';
    import UsersContext from './UsersContext';
    
    describe('UsersContext', function() {
        it('should receive and set the user in the context', function() {
            const FamilyName = 'Doe';
            const user = {
                firstName: 'John',
                lastName:  FamilyName
            };
            const wrapper = mount(
                <UsersContext.Provider value={user}>
                    <div>Content</div>
                </UsersContext.Provider>
            );
            const receivedUser = wrapper.find(UsersContext.Consumer).props().value;
            
            expect(receivedUser).toEqual(user);
        });
    });