import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Index from './index';

describe('Index Component', () => {
    test('renders Index component', () => {
        const { getByText } = render(<Index />);
        const linkElement = getByText(/Index/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('check whether the button is clickable', () => {
        const { getByText } = render(<Index />);
        const buttonElement = getByText(/Click me/i);
        fireEvent.click(buttonElement);
        expect(buttonElement).toBeInTheDocument();
    });
});