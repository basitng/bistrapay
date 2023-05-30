import React from 'react';
    import { shallow } from 'enzyme';
    import Profile from './profile';
    
    describe('Profile component', () => {
        it('should render without errors', () => {
            const component = shallow(<Profile />);
            const wrapper = component.find('.component');
            expect(wrapper.length).toBe(1);
        }); 
    });