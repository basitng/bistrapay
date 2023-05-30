import React from 'react';
    import { render } from '@testing-library/react';
    import Profile from './Profile';

    describe('Profile', () => {
        it('should render properly', () => {
            const { container } = render(<Profile />);
            expect(container).toMatchSnapshot();
        });

        it('should render a form to update the profile info', () => {
            const { getByText, getByLabelText } = render(<Profile />);
            expect(getByText('Update Profile')).toBeInTheDocument();
            expect(getByLabelText('Username')).toBeInTheDocument();
            expect(getByLabelText('Email Address')).toBeInTheDocument();
            expect(getByLabelText('Display Name')).toBeInTheDocument();
        });

        it('should update the profile once the submit button is clicked', () => {
            const { getByText, getByLabelText } = render(<Profile />);

            getByLabelText('Username').value = 'username';
            getByLabelText('Email Address').value = 'test@example.com';
            getByLabelText('Display Name').value = 'displayName';
            getByText('Update Profile').click();

            expect(getByText('User profile updated successfully!')).toBeInTheDocument();
        });
    });