import React from 'react';
        import { shallow, mount } from 'enzyme';
        import Manage from '../../pages/Manage';
        
        describe('Manage Page', () => {
          it('renders without crashing', () => {
            shallow(<Manage />);
          });
        
          it('renders content crrectly', () => {
            const managePage = mount(<Mange />);
            expect(managePage.find(".manage__title").text()).toEqual("Manage Page");
            expect(managePage.find('#manage__add').text()).toEqual("Add");
            expect(managePage.find('#manage__remove').text()).toEqual("Remove");
          });
          
        });