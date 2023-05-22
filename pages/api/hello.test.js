import React from 'react';

const Hello = () => (
  <div>
    <h1>Hello World</h1>
    <p>This is a simple React component.</p>
  </div>
)

export default Hello;

import { render, screen } from '@testing-library/react';

describe('Hello', () => {
    it('should render the component', () => {
        render(<Hello />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
        expect(screen.getByText('This is a simple React component.')).toBeInTheDocument();
    });
});