// import React from 'react';
    import App from './_app';
 
    describe('App', () => {
        let component;
        beforeEach(() => {
            component = shallow(<App />);
        });
    
        it('should render the component properly', () => {
            expect(component).toMatchSnapshot();
        });
    
        it('should render one main element', () => {
            expect(component.find('main').length).toBe(1);
        });
    
        it('should render a footer', () => {
            expect(component.find('footer').length).toBe(1);
        });
    });