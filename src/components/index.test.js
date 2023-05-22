import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';

let App = () => {
  return(
    <div>
      <input id="signInForm-username" type="text" placeholder="Username"></input>
      <input id="signInForm-password" type="password" placeholder="Password"></input>
      <button type="submit">Sign In</button>
    </div>
  );
};

test('Sign In form works correctly', async () => {
  const { getByPlaceholderText, getByText } = render(<App />);

  const usernameInput = getByPlaceholderText('Username');
  const passwordInput = getByPlaceholderText('Password');
  fireEvent.change(usernameInput, { target: {value: 'JohnDoe'} });
  fireEvent.change(passwordInput, { target: {value: 'pa$$w0rd'} });
  const signInButton = getByText('Sign In');
  fireEvent.click(signInButton);

  const successMessage = await waitForElement(() => getByText("You have successfully logged in!"));
  expect(successMessage).toBeInTheDocument();
});