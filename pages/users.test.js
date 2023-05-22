//import React from 'react';
    import { render, fireEvent, screen } from '@testing-library/react';
    import Users from './Users';
    
    describe('Users component', () => {
        test('it should display number of users and a greeting message when rendered', () => {
            // Arrange
            const numUsers = 5;
            
            // Act
            render(<Users numUsers={numUsers} />);
            
            // Assert
            const userCount = screen.getByText('There are 5 users in the system');
            const greetingMsg = screen.getByText(/Welcome to the users page/);
            
            expect(userCount).toBeInTheDocument();
            expect(greetingMsg).toBeInTheDocument();
        });
        
        test('it should update the user greeting message when user clicks the button', () => {
            // Arrange
            const numUsers = 5;
            
            // Act
            render(<Users numUsers={numUsers} />);
            const button = screen.getByRole('button');
        
            fireEvent.click(button);
            
            // Assert
            const updatedGreetingMsg = screen.getByText(/Thank you for visiting/);
            
            expect(updatedGreetingMsg).toBeInTheDocument();
        });
    });