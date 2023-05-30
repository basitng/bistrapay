One possible solution:
        import { expect } from 'chai';
        import React from 'react';
        import { shallow } from 'enzyme';
        
        import Users from './pages/Users';
        
        describe('Users component', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = shallow(<Users />);
            });
            
            it('should render successfully', () => {
                expect(wrapper).to.have.lengthOf(1);
            });
            
            it('should render the component `div` element', () => {
                expect(wrapper.find('div')).to.have.lengthOf(1);
            });
            
            it('should contain a title', () => {
               expect(wrapper.find('h1').text()).to.equal('Users');
            });
        });