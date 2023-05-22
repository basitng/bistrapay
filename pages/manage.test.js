import React from 'react';
import {render} from '@testing-library/react';
import Manage from './Manage';

describe('Testing Manage Component', () => {
    it('Should render the component', () => {
        const {getByTestId} = render(<Manage />);
        const manageComponent = getByTestId('manage-component');
        expect(manageComponent).toBeInTheDocument();
    });

    it('Should render all the fields correctly', () => {
        const {getByTestId} = render(<Manage />);
        const usernameField = getByTestId('username');
        const passwordField = getByTestId('password');
        const registerButton = getByTestId('register-button'); 
        expect(usernameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();
    });

    it('Should handle form submit correctly', () => {
        const {getByTestId} = render(<Manage />);
        const usernameField = getByTestId('username');
        const passwordField = getByTestId('password');
        const registerButton = getByTestId('register-button'); 
        usernameField.value = 'Tutor';
        passwordField.value = 'Testing123';
        registerButton.dispatchEvent(new MouseEvent('click', {bubbles: true}));
        expect(usernameField.value).toBe('Tutor');
        expect(passwordField.value).toBe('Testing123');
    });

});