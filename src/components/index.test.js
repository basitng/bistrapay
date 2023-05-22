import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation component', () => {
  test('should render properly', () => {
    const { container } = render(<Navigation />);
    expect(container.firstChild).toBeDefined();
  });

  test('should invoke click handler on navigation links', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Navigation activeItem="home" handleClick={handleClick}/>
    );
    fireEvent.click(getByText('Home'));
    fireEvent.click(getByText('About'));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test('should set active style on item with activeItem prop', () => {
    const { getByText } = render(
      <Navigation activeItem="home" handleClick={() => {}}/>
    );
    const link = getByText('Home');
    expect(link.parentElement.classList).toContain('active');
  });
});