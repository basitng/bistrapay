import React from 'react';
    import {UsersList} from './UsersList';

    describe('UsersList component', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<UsersList />)
        }); 
        
        test('should render the title', () => {
            const title = wrapper.find('h2');
            expect(title.text()).toBe('List of All Users:');
        }); 
        
        test('should render a list of users', () => {
            expect(wrapper.find('ul').exists).toBe(true);
            expect(wrapper.find('li').length).toBe(10);
        });
        
        test('it should contain a name for each user', () => {
            // check every li item
            wrapper.find('li').forEach(node => {
                expect(node.text.includes('Name:')).toBeTruthy();
            });
        }); 
    });