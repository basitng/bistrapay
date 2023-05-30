import React from 'react';
import NavBar from './NavBar';
import { render, fireEvent } from "@testing-library/react";

test('Clicking link should change page', () => { 
    // Initial Render of the component
    const { getByText } = render(<NavBar />);

    // Assert link is present
    const linkElement = getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();

    // Fire Event
    fireEvent.click(linkElement);

    // Assert new page and link to be presented
    const aboutLinkElement = getByText(/About/i);
    expect(aboutLinkElement).toBeInTheDocument();
});