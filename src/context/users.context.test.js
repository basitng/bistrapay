import React from 'react';
        import { mount, shallow } from 'enzyme';
        import { UsersContext } from '../context/users.context';
        
        describe('Component rendering', () => {

           it('should render correctly', () => {
              const wrapper = shallow(<UsersContext.Provider>Test</UsersContext.Provider>);
              expect(wrapper).toMatchSnapshot();
           });
        });