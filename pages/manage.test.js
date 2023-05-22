import React from 'react';
import { render } from '@testing-library/react';

const Manage = () => {
    return (
        <div>
            <h1>Manage</h1>
            <button>Add</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

describe('Manage component', () => {
    it('should render the Manage component', () => {
        const { getByText } = render(<Manage />);
        const addButton = getByText('Add');
        const editButton = getByText('Edit');
        const deleteButton = getByText('Delete');
        
        expect(addButton).toBeInTheDocument();
        expect(editButton).toBeInTheDocument();
        expect(deleteButton).toBeInTheDocument();
    });
});