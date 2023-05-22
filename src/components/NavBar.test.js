import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  it('Should render the navbar', () => {
    const { getByText } = render(<NavBar />);
  
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('Should navigate to the correct page when clicking a link', () => {
    const { getByText } = render(<NavBar />);
  
    fireEvent.click(getByText('Home'));
    expect(window.location.href).toMatch(/\/home/);
  
    fireEvent.click(getByText('About'));
    expect(window.location.href).toMatch(/\/about/);
  
    fireEvent.click(getByText('Contact'));
    expect(window.location.href).toMatch(/\/contact/);
  });
});