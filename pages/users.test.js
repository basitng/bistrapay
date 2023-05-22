import React from 'react'; 
import { render } from '@testing-library/react';
import Users from './users';
 
describe('Users component', () => {
  it('renders name successfully', () => {
    const { getByText } = render(<Users />);
    const userNameNode = getByText('John Doe');
    expect(userNameNode).toBeInTheDocument();
  });
});