import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Index from './index';

describe('Index component', () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    const { container } = render(<Index />);
    expect(container).toBeTruthy();
  });

  it('should render a div', () => {
    const { container } = render(<Index />);
    const div = container.querySelector('div');
    expect(div).toBeTruthy();
  });

  it('should render the correct text', () => {
    const { getByText } = render(<Index />);
    const text = getByText('This is the index component.');
    expect(text).toBeTruthy();
  });
});