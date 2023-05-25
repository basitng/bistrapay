// import React from 'react'

import { render } from '@testing-library/react';

describe('Users', () => {
  it('should render the page with common elements', () => {
    const { getByText } = render(<Users />);
    expect(getByText('Users List')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Age')).toBeInTheDocument();
    expect(getByText('Location')).toBeInTheDocument();
  });
});