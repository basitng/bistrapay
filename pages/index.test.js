import React from 'react';
import {render} from '@testing-library/react';

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

describe('App', () => {
    test('renders the component', () => {
        const {getByText} = render(<App />);
        expect(getByText('Hello World')).toBeInTheDocument();
    });
});