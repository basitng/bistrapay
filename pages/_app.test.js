import React from 'react';
import { render } from '@testing-library/react';
import App from './_app';

describe('App', () => {
    it('should render without errors', () => {
        const { getByText } = render(<App />);
        const titleElement = getByText(/My App/i);
        expect(titleElement).toBeInTheDocument();
    });
});