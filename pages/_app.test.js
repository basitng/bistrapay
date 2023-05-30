import React from 'react';
    import App from './_app';
    
    import { render, screen } from '@testing-library/react';

    describe('<App />', () => {
        test('render app component', () => {
            render(<App />);
            const app = screen.getByText(/app/i);
            expect(app).toBeInTheDocument();
        })
    })