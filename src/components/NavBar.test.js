import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  test('should render properly', () => {
    const { getByTestId } = render(<NavBar />);
    const navBar = getByTestId('navBar');
    expect(navBar).toBeInTheDocument();
  });

  test('should collapse the nav bar on click of the toggle button', () => {
    const { getByTestId } = render(<NavBar />);
    const toggleButton = getByTestId('toggleButton');
    fireEvent.click(toggleButton);

    const navBar = getByTestId('navBar');
    expect(navBar).toHaveClass('collapse');
  });
});