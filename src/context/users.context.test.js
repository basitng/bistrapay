import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UsersContext } from '../context/users.context';

describe('UsersContext', () => {
  // 1. Component Rendering
  it('should render the UsersContext component', () => {
    const { getByText } = render(<UsersContext />);
    expect(getByText('UsersContext')).toBeInTheDocument();
  });

  // 2. Props and State
  it('should update the state when props change', () => {
    const { getByText, rerender } = render(<UsersContext />);
    const newProps = { name: 'John Doe' };
    rerender(<UsersContext {...newProps} />);
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  // 3. Event Handling
  it('should call the handleClick function when the button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <UsersContext handleClick={handleClick} />
    );
    const button = getByText('Button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  // 4. Component Interactions
  it('should pass the correct data to the child component', () => {
    const { getByText } = render(
      <UsersContext>
        <div>
          <span>Name: </span>
          <span data-testid="name">John Doe</span>
        </div>
      </UsersContext>
    );
    expect(getByText('John Doe')).toBeInTheDocument();
  });

  // 5. Asynchronous Operations
  it('should display the loading indicator when fetching data', async () => {
    const { getByText } = render(<UsersContext />);
    await waitForElement(() => getByText('Loading...'));
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  // 6. Routing and Navigation
  it('should navigate to the correct URL when the button is clicked', () => {
    const { getByText } = render(
      <UsersContext url="/profile" />
    );
    const button = getByText('Button');
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/profile');
  });

  // 7. Redux or State Management
  it('should dispatch the correct action when the button is clicked', () => {
    const dispatch = jest.fn();
    const { getByText } = render(
      <UsersContext dispatch={dispatch} />
    );
    const button = getByText('Button');
    fireEvent.click(button);
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_USER' });
  });

  // 8. Form Validation
  it('should validate a valid form submission', () => {
    const { getByLabelText, getByText } = render(<UsersContext />);
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(getByText('Form submitted!')).toBeInTheDocument();
  });

  // 9. Component Lifecycle Methods
  it('should call componentDidMount when the component is mounted', () => {
    const componentDidMount = jest.fn();
    render(<UsersContext componentDidMount={componentDidMount} />);
    expect(componentDidMount).toHaveBeenCalled();
  });

  // 10. Snapshot Testing
  it('should match the snapshot', () => {
    const { asFragment } = render(<UsersContext />);
    expect(asFragment()).toMatchSnapshot();
  });

  // 11. Accessibility (a11y)
  it('should meet accessibility guidelines', async () => {
    const { container } = render(<UsersContext />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 12. Error Handling and Edge Cases
  it('should display an error message when an error occurs', () => {
    const { getByText } = render(<UsersContext error="Something went wrong" />);
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });
});