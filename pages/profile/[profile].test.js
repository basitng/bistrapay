import React from 'react';
import { render } from '@testing-library/react';
import { Profile } from './profile';

describe('Profile', () => {
    it('should render profile information', () => { 
        const props = {
            name: 'John Doe',
            age: 30,
            job: 'Software Developer'
        }
        const { getByText } = render(<Profile {...props} />);

        expect(getByText('Name: John Doe'));
        expect(getByText('Age: 30'));
        expect(getByText('Job: Software Developer'));
    });
});