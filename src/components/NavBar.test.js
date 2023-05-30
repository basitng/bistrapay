//import React from 'react';
    //import NavBar from './NavBar';
    //import { render } from '@testing-library/react';
    
    describe('Testing NavBar component', () => {
        test('NavBar renders correctly', () => { 
            const { getByTestId } = render(<NavBar />);
            expect(getByTestId('navbar')).toBeInTheDocument(); 
            expect(getByTestId('navbar-element-a')).toBeInTheDocument();
            expect(getByTestId('navbar-element-b')).toBeInTheDocument();
        });
    });