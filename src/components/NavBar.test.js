import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render the correct elements', () => {
    const { getByText, getByTestId } = render(<NavBar />);
    const linkElement = getByText(/Home/i);
    const buttonElement = getByTestId('nav-button');
    expect(linkElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should handle click events correctly', () => {
    const { getByTestId } = render(<NavBar />);
    const buttonElement = getByTestId('nav-button');
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveAttribute('aria-expanded', 'true');
  });

  it('should update the UI when props change', () => {
    const { getByText } = render(<NavBar title="Test" />);
    const titleElement = getByText(/Test/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the correct links', () => {
    const { getByText } = render(<NavBar links={['Home', 'About', 'Contact']} />);
    const homeLink = getByText(/Home/i);
    const aboutLink = getByText(/About/i);
    const contactLink = getByText(/Contact/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
  
  it('should navigate to the correct page when a link is clicked', () => {
    const { getByText } = render(<NavBar links={['Home', 'About', 'Contact']} />);
    const homeLink = getByText(/Home/i);
    fireEvent.click(homeLink);
    expect(window.location.href).toBe('/home');
  });
});