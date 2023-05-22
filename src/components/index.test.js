import React from 'react';

const MyComponent = () => {
  return <div>My Component</div>
};

describe('MyComponent', () => {
    it('renders the component correctly', () => {
        const { getByText } = render(<MyComponent />);
        expect(getByText('My Component')).toBeInTheDocument();
    });
});