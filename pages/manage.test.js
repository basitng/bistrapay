import React from 'react';
import { shallow } from 'enzyme';
import Manage from './Manage';

describe('Manage component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Manage />);
        expect(wrapper).toBeDefined();
    }); 
});