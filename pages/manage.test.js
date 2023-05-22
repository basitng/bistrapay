import React from 'react';
import Manage from './manage';

let component;

beforeEach(() => {
  component = render(<Manage />);
});

describe('Manage Component', () => {
  test('should render the component without errors', () => {
    expect(component).toBeTruthy();
  });

  test('should check if the manage component has a form element', () => {
    const manageForm = component.container.querySelector('form');
    expect(manageForm).toBeTruthy();
  });

  test('should simulate a submit event on click of the submit button', () => {
    const buttonElement = component.getByText('Submit');
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeTruthy();
  });
 
});