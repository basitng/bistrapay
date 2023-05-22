//Here is an example using React Testing Library 

import { render } from '@testing-library/react';
import Profile from './profile';

describe('Profile component', ()=> {
  it('renders the profile page title', ()=> {
    const { getByText } = render(<Profile />);
    const titleElement = getByText(/profile/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the avatar with gravatar email address', () => {
    const { getByTestId } = render(<Profile />);
    const avatarElement = getByTestId('avatar');

    expect(avatarElement.src).toBe('http://www.gravatar.com/test@email.com');
  });

  it('should render the profile details', ()  => {
    const { getByText } = render(<Profile />);
    const testNameElement = getByText('Name: John Doe');
    const testCityElement = getByText('City: San Francisco');
    const testBioElement = getByText('Bio: I am an experienced software developer.');

    expect(testNameElement).toBeInTheDocument();
    expect(testCityElement).toBeInTheDocument();
    expect(testBioElement).toBeInTheDocument();
  });
});