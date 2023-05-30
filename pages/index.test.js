//Solution
        import React from 'react';
        import {render, fireEvent} from '@testing-library/react';
        import App from './pages/index';
        
        describe('Index Page', () => {
            it('Should render correctly', () => {
                const { getByTestId } = render(<App />);
                const pageTitle = getByTestId('page-title');
                expect(pageTitle).toHaveTextContent('Welcome!');
            });
        
            it('Should change page title on button click', () => {
                const { getByTestId } = render(<App />);
                const button = getByTestId('change-title-button');
                fireEvent.click(button);
                const pageTitle = getByTestId('page-title');
                expect(pageTitle).toHaveTextContent('Page Title Changed!');
            });
        });