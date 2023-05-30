import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Index from './index';

afterEach(cleanup);

describe('Index Component', () => {
    
    it('renders without crashing', () => {
        const { getByText } = render(<Index />);
        const linkElement = getByText(/Index/i);
        expect(linkElement).toBeInTheDocument();
    });
});