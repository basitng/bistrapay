import React from 'react';

const Manage = () => {
    return(
        <div>
            <h1>Manage</h1>
            <p>Here you can manage the things from the list.</p>
        </div>
    );
}

export default Manage;

import React from 'react';
import { render, screen } from '@testing-library/react';
import Manage from './manage';

describe('Manage', () => {
    it('Navigates to the manage page', () => {
        render(<Manage />);
        expect(screen.getByText(/Manage/i)).toBeInTheDocument();
    });

    it('Renders a header and a text block', () => {
        render(<Manage />);
        expect(screen.getByText('Manage')).toBeInTheDocument();
        expect(screen.getByText('Here you can manage the things from the list.')).toBeInTheDocument();
    });
});