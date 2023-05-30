import React from 'react';
    import { shallow } from 'enzyme';
    import Users from './users';

    describe('Users Component', () => {
      test('should render correctly', () => {
        const wrapper = shallow(<Users />);
        expect(wrapper).toMatchSnapshot();
      });
    });