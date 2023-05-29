import React from 'react';
import { shallow } from 'enzyme';
import Index from './index';

describe('Index', () => {
    it('should render a div', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain the correct props', () => {
        const wrapper = shallow(<Index title="Test" />);
        expect(wrapper.instance().props.title).toEqual('Test');
    });
});