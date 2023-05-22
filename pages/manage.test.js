import React from 'react';
import {render, screen} from '@testing-library/react';
import Manage from './manage';

describe('Manage Component', () => {
    it('should render the manage component', () => {
        render(<Manage />);
        expect(screen.getByText('Manage')).toBeInTheDocument();
    });
});