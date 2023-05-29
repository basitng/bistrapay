import React from 'react';
import Button from './Button';

const IndexPage = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <Button label="click me" />
        </div>
    );
}

export default IndexPage;

//Unit Test
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import IndexPage from './index';

afterEach(cleanup);

test('it should render the <IndexPage /> correctly', () => {
    const { getByText } = render(<IndexPage />);
    expect(getByText('IndexPage')).toBeInTheDocument();
    expect(getByText('click me')).toBeInTheDocument();
});