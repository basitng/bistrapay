import React from 'react';
    import {render, fireEvent } from '@testing-library/react';
    import Hello from './hello';

    describe('Hello', () => {
        it('should display a greeting', () => {
            //Arrange
            const name = 'Dan';
            const title = 'Developer';

            const { getByText } = render(<Hello name={name} title={title} />)
             
            // Act
            const element = getByText(/hello/i);

            // Assert
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent('Hello Dan! You are a Developer');
        });

        it('the text should change when a new name is provided', () => {
            //Arrange
            const name = 'Test';
            const title = 'Tester';

            const { getByText, getByLabelText } = render(<Hello name={name} title={title} />)

            const nameInput = getByLabelText(/name/i);
            const titleInput = getByLabelText(/title/i);

            // Act
            fireEvent.change(nameInput, { target: { value: 'Test' } });
            fireEvent.change(titleInput, { target: { value: 'Tester' } });

            // Assert
            const element = getByText('Hello Test! You are a Tester');
            expect(element).toBeInTheDocument();
        });
    });