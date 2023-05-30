import React from 'react';
    import { render, cleanup } from 'react-testing-library';
    
    afterEach(cleanup);
    
    const Manage = () => <div><h1>Manage</h1><section>Manage Content</section></div>;
    
    describe('Manage', () => {
      it('should render manage component and content correctly', () => {
        const { getByTestId, container } = render(<Manage />);
    
        expect(getByTestId('manage')).toBeTruthy();
        expect(container).toMatchSnapshot();
      });
    });