import React from 'react';
import Navbar from './Navbar';
import {render, fireEvent, screen} from '@testing-library/react';

describe('Navbar component', () => {
    it('should render without errors', () => {  
        render(<Navbar />);
        const navbar = screen.getByTestId('navbarComponent');
        expect(navbar).toBeInTheDocument();
    });

    it('should navigate to the about page when the about link is clicked', () => {
        render(<Navbar />);
        const aboutLink = screen.getByTestId('about-link');
        fireEvent.click(aboutLink);
        expect(window.location.pathname).toBe("/about");
    })


    it('should navigate to the contact page when the contact link is clicked', () => {
        render(<Navbar />);
        const contactLink = screen.getByTestId('contact-link');
        fireEvent.click(contactLink);
        expect(window.location.pathname).toBe("/contact");
    });

});