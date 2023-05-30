import React from 'react';
    import {shallow, mount} from 'enzyme';
    import Header from './Header';
    
    describe('Header Component', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Header />);
      });
      it('should render three divs with class names', () => {
        expect(wrapper.find('div').length).toEqual(3);
        expect(wrapper.find('.first').length).toEqual(1);
        expect(wrapper.find('.second').length).toEqual(1);
        expect(wrapper.find('.third').length).toEqual(1);
      });
  
      it('should render an h1 tag', () => {
        expect(wrapper.find('h1').length).toEqual(1);
      });
    
      it('should correctly display the text inside h1 tag', () => {
        const text = wrapper.find('h1').text();
        expect(text).toBe('This is the header component');
      });
    });