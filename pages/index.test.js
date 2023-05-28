// None
    
        import React from 'react';
        import { mount } from 'enzyme';
        import App from '../App'
    
        describe('App', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = mount(<App />)
            })
    
            it('should render without errors', () => {
                expect(wrapper.find('.App')).toHaveLength(1);
            });
    
            it('should render the title', () => {
                expect(wrapper.find('h1').text()).toBe('Welcome to My App');
            });
        });