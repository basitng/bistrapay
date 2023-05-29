//Solution
        //using react-testing-library
        
        import React from 'react';
        import { render, screen } from '@testing-library/react';
        import Users from '../pages/users';

        test('User should be properly displayed', () => {
            const users = [
                {name:'John Smith', email: 'JohnSmith@example.com'},
                {name:'Kevin Jackson', email: 'KevinJackson@example.com'}
            ];
            render(<Users users={users} />);

            users.forEach(user => {
                const name = screen.getByText(user.name);
                const email = screen.getByText(user.email);
                expect(name).toBeInTheDocument();
                expect(email).toBeInTheDocument();
            });
        });