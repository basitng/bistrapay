import React from 'react';
        import { render, fireEvent } from '@testing-library/react';

        const App = () => {
            const [text, setText] = React.useState('');
            const handleChange = (e) => {
                setText(e.currentTarget.value);
            };

            return (
                <div>
                    <input type="text" value={text} onChange={handleChange} />
                    <p>{`Text: ${text}`}</p>
                </div>
            );
        };


        test('App component should render an input field', () => {
            const { queryByTestId } = render(<App />);
            const inputField = queryByTestId('input-field');
            expect(inputField).toBeInTheDocument();
        });

        test('App component should update the value of the input field', () => {
            const { queryByTestId } = render(<App />);
            const inputField = queryByTestId('input-field');
            expect(inputField.value).toBe('');
            fireEvent.change(inputField, { target: { value: 'New Value' } });
            expect(inputField.value).toBe('New Value');
        });

        test('App component should update the text when the input value is changed', () => {
            const { queryByTestId } = render(<App />);
            const textField = queryByTestId('text-field');
            expect(textField.textContent).toBe('Text: ');
            const inputField = queryByTestId('input-field');
            fireEvent.change(inputField, { target: { value: 'New Value' } });
            expect(textField.textContent).toBe('Text: New Value');
        });