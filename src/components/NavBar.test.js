import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from './NavBar';

describe('NavBar', () => {
    it('should render the navigation bar', () => {
        render(<NavBar />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    it('contains the list of navigation links', () => {
        const { getByText } = render(<NavBar />);
        expect(getByText('Home')).toBeInTheDocument();
        expect(getByText('About')).toBeInTheDocument();
        expect(getByText('Contact')).toBeInTheDocument();
    });
    it('each navigation link should take the user to the expected page', () => {
        const { getByTestId } = render(<NavBar />);
        const homeLink = getByTestId('home-link');
        const aboutLink = getByTestId('about-link');
        const contactLink = getByTestId('contact-link');
        expect(homeLink.href).toContain('/home');
        expect(aboutLink.href).toContain('/about');
        expect(contactLink.href).toContain('/contact');
    });
});