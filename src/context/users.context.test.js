import React from 'react';
import { UserContext } from './users.context';

describe('UserContext', () => {
  it('should render without crashing', () => {
    const userContext = new UserContext();
    expect(userContext).not.toBeNull();
  });

  it('should have a method to add a user to the context', () => {
    const userContext = new UserContext();
    expect(userContext.addUser).toBeDefined();
    expect(typeof userContext.addUser).toBe('function');

    const user = {
      id: 1,
      name: 'John Smith',
    };
    userContext.addUser(user);

    // Check the value has changed
    expect(userContext.users).toContain(user);
  });
});