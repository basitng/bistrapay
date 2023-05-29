import React from 'react';
     
     const Manage = () => {
        const [title, setTitle] = React.useState(""); 
        const updateTitle = () => {
            setTitle("Updated Title");
        }

        return (
            <div>
               <button onClick={updateTitle}>Update Title</button>
               <p>{title}</p>
            </div>
        )
     }
     
     // Unit Test
     import React from 'react';
     import { render, fireEvent, screen } from '@testing-library/react';
     
     test('updates the title correctly when the updateTitle button is clicked', () => {
        const { container } = render(<Manage />);
        const updateTitleButton = screen.getByText("Update Title");
        const titleElement = screen.getByText(/^$/)
     
        expect(titleElement.textContent).toBe('');
        fireEvent.click(updateTitleButton);
        expect(titleElement.textContent).toBe('Updated Title');
     });