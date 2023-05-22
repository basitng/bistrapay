import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('renders the NavBar component correctly', () => {
    render(<NavBar />);
    expect(screen.queryByTestId('nav-bar')).toBeTruthy();
  });

  it('renders the NavBar component with correct title', () => {
    render(<NavBar title="Home Page" />);
    expect(screen.queryByText('Home Page')).toBeTruthy();
  });
});