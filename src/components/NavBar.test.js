import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('Nav Bar Component', () => {
    it('should change the navigation bar on click ', () => {
        //Arrange
        const navBarItems = [{
            title: 'Home',
            path: '/home'
        }, {
            title: 'Dashboard',
            path: '/dashboard'
        }]

        const { getByTestId } = render(<NavBar navBarItems={navBarItems} />);

        //Act
        const homeNavButton = getByTestId('navbar-home');
        fireEvent.click(homeNavButton);
        const dashboardNavButton = getByTestId('navbar-dashboard');
        fireEvent.click(dashboardNavButton);

        //Assert
        expect(getByTestId('navbar-home')).not.toHaveClass('active');
        expect(getByTestId('navbar-dashboard')).toHaveClass('active');
    });
});