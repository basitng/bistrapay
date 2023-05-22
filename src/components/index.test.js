//import statements
import React from 'react';
import {render, fireEvent, cleanup } from '@testing-library/react';
import Index from './index';

afterEach(cleanup);

describe('testing index component', () => {
    let getByTestId;
    beforeEach(() => {
        ({getByTestId} = render(<Index />));
    });
    
    // test to see if the page renders the component
    test('renders correctly', () => {
        expect(getByTestId('index')).toBeDefined();
    });

    // test to see if the name changes when inputted
    test('name changes when inputted', () => {
        expect(getByTestId('name-input').value).toBeFalsy();
        fireEvent.change(getByTestId('name-input'), {
            target: {value: 'John'}
        });
        expect(getByTestId('name-input').value).toBe('John');
    });
});