import React from 'react';

describe('index', () => {
    it('renders the page', () => {
        const { getByText } = render(<index />);
        expect(getByText('Welcome to my page!')).toBeInTheDocument();
    });
});