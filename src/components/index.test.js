import React from 'react';
import {render} from '@testing-library/react';
import Index from './index';

describe('Testing the Index page component', () => {
    test('Index renders correctly', () => {
        const {getByText, getByTestId} = render(<Index />);
        const titleTestElement = getByTestId('title-test');
        expect(titleTestElement).toBeInTheDocument();
        expect(getByText('Index page')).toBeInTheDocument();
    });
});