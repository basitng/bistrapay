import React from 'react';
import  Profile  from "./[profile]";

describe('[Profile]', () => {
  let component;

  beforeEach(() => {
    component = window.render(<Profile />);
  });

  it('should render a profile page component', () => {
    expect(component.container).toBeInTheDocument();
  });

  it('should contain a header with the title of the page', () => {
    const header = component.getByText('Profile');
    expect(header).toBeInTheDocument();
  });

  it('should contain a form to edit the user profile', () => {
    const form = component.container.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('should contain fields to update the user profile information', () => {
    const nameInput = component.container.querySelector(
      'input[name="name"]'
    );
    expect(nameInput).toBeInTheDocument();

    const emailInput = component.container.querySelector(
      'input[name="email"]'
    );
    expect(emailInput).toBeInTheDocument();
  });

  it('should have a button to submit the form', () => {
    const submitButton = component.container.querySelector('button');
    expect(submitButton).toBeInTheDocument();
  });
});