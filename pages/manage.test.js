Answer: 
// Import the React, Enzyme Library and whatever library you like
import React from 'react'
import {mount, shallow} from 'enzyme'
import Manage from './pages/manage'

// Unit test for Manage component
describe('Manage component', () => {
    // Initializing the component
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Manage />);
    });

    //Test to ensure the component renders correctly
    it('should render Manage component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // Test to render the component
    it('should render', () => {
        expect(wrapper.exists).toBeTruthy();
    });

    // Test to find if the component renders the correct HTML element
    it('should render a div', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

});