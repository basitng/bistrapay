import React from 'react';
import { render } from '@testing-library/react';

describe('App component', () => {
  test('renders without errors', () => {
    const { queryByTestId } = render(<App />);
    const component = queryByTestId('app-component'); 
    expect(component).toBeInTheDocument();
  });

  test('renders a title', () => {
    const { queryByTestId } = render(<App />);
    const title = queryByTestId('app-title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe('My App Component');
  });
});