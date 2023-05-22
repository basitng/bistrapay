import React from 'react';

const MyComponent = () => {
    return <div>This is my test component</div>
}


import {render, screen } from '@testing-library/react';

describe('MyComponent', () => {
    it('should render the component', () => {
        render(<MyComponent />);
        expect(screen.getByText('This is my test component')).toBeInTheDocument();
    });
});