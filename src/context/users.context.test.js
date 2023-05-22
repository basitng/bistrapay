import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserContext } from './users.context';

describe('UserContext component', () => {
  it('should render its children', () => {
    const { queryByText } = render(
      <UserContext>
        <div>Test</div>
      </UserContext>
    );
    expect(queryByText('Test')).not.toBeNull();
  });

  it('should update the context value when a button is clicked', () => {
    const { queryByText } = render(
      <UserContext>
        <button>Change value</button>
      </UserContext>
    );

    const button = queryByText('Change value');
    expect(button).not.toBeNull();

    fireEvent.click(button);
    expect(UserContext.value).toBe('changed');
  });
});