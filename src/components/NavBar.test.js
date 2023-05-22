import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
    test('it should open menu when clicked', () => {
        const { getByTestId } = render(<NavBar />);

        fireEvent.click(getByTestId("menu-button"))

        expect(getByTestId("menu")).toBeVisible();
    });
});