import React from 'react';
        
        import {shallow} from 'enzyme';
        
        import Manage from './Manage';
        
        describe('Manage component', () => {
            test('renders without crashing', () => {
                const wrapper = shallow(<Manage />);
                expect(wrapper).toBeDefined();
            });
            
            test('calls the handleSubmit method when form is submitted', () => {
                const wrapper = shallow(<Manage />);
                const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
                wrapper.update();
                wrapper.find('form').simulate('submit');
                expect(handleSubmitSpy).toHaveBeenCalled();
            });
        });