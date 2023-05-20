import React from 'react';
import {render, fireEvent, waitForElement} from '@testing-library/react';
import Users from './Users';

describe('Users Component', () => {
    // 1. Component Rendering
    it('should render the component correctly', () => {
        const {getByTestId} = render(<Users />);

        expect(getByTestId('users-component')).toBeInTheDocument();
    });

    // 2. Props and State
    it('should render the component correctly with different props', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };

        const {getByTestId, getByText} = render(<Users {...props} />);

        expect(getByTestId('users-component')).toBeInTheDocument();
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('Jane Doe')).toBeInTheDocument();
    });

    // 3. Event Handling
    it('should respond to user interactions', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };

        const {getByTestId, getByText} = render(<Users {...props} />);

        fireEvent.click(getByText('John Doe'));
        expect(getByTestId('user-selected')).toBeInTheDocument();
    });

    // 4. Component Interactions
    it('should pass props and state correctly between components', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId, getByText, queryByText} = render(<Users {...props} />);

        fireEvent.click(getByText('John Doe'));
        expect(getByTestId('user-selected')).toBeInTheDocument();
        expect(queryByText('Jane Doe')).not.toBeInTheDocument();
    });

    // 5. Asynchronous Operations
    it('should handle loading state correctly', async () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };

        const {getByTestId, queryByText} = render(<Users {...props} />);

        expect(getByTestId('loading-state')).toBeInTheDocument();
        await waitForElement(() => queryByText('John Doe'));
        expect(queryByText('John Doe')).toBeInTheDocument();
    });

    // 6. Routing and Navigation
    it('should navigate to the correct page on user selection', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId, getByText} = render(<Users {...props} />);

        fireEvent.click(getByText('John Doe'));
        expect(getByTestId('user-selected')).toBeInTheDocument();
        expect(window.location.pathname).toBe('/users/1');
    });

    // 7. Redux or State Management
    it('should dispatch the correct action on user selection', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId, getByText} = render(<Users {...props} />);
        const mockDispatch = jest.fn();

        fireEvent.click(getByText('John Doe'));
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'SELECT_USER',
            payload: {
                id: 1,
                name: 'John Doe',
            },
        });
    });

    // 8. Form Validation
    it('should validate the user input correctly', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId, getByLabelText} = render(<Users {...props} />);

        const inputField = getByLabelText('Name');
        fireEvent.change(inputField, {target: {value: 'invalid'}});
        expect(inputField.value).toBe('');
        expect(getByTestId('error-message')).toBeInTheDocument();
    });

    // 9. Component Lifecycle Methods
    it('should call the componentDidMount method', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId} = render(<Users {...props} />);

        expect(getByTestId('componentDidMount-called')).toBeInTheDocument();
    });

    // 10. Snapshot Testing
    it('should match the snapshot', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {asFragment} = render(<Users {...props} />);

        expect(asFragment()).toMatchSnapshot();
    });

    // 11. Accessibility (a11y)
    it('should meet accessibility standards', () => {
        const props = {
            users: [
                {
                    id: 1,
                    name: 'John Doe',
                },
                {
                    id: 2,
                    name: 'Jane Doe',
                },
            ],
            isLoading: true,
        };
        const {getByTestId} = render(<Users {...props} />);

        expect(getByTestId('a11y-passed')).toBeInTheDocument();
    });

    // 12. Error Handling and Edge Cases
    it('should handle errors correctly', () => {
        const props = {
            users: [],
            isLoading: true,
        };
        const {getByTestId} = render(<Users {...props} />);

        expect(getByTestId('error-state')).toBeInTheDocument();
    });
});