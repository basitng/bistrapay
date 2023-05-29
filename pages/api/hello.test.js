import React from 'react';

const Hello = () => {
    return <div>Hello World</div>;
};

export default Hello;

import { render } from '@testing-library/react';

describe('Hello', () => {
    it('should render Hello World', () => {
        const { getByText } = render(<Hello />);
        expect(getByText('Hello World').textContent).toBe('Hello World');
    });
});