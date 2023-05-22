import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('should render the App component', () => {
        const { getByText } = render(<App />);
        const appTitle = getByText('My App');
        expect(appTitle).toBeInTheDocument();
    });

    it('should have a button that says "Click me!"', () => {
        const { getByText } = render(<App />);
        const clickMeButton = getByText('Click me!');
        expect(clickMeButton).toBeInTheDocument();
    });

    it('should update the text when the button is clicked', () => {
        const { getByText } = render(<App />);
        const clickMeButton = getByText('Click me!');
        fireEvent.click(clickMeButton);

        const updatedText = getByText('You clicked the button!');
        expect(updatedText).toBeInTheDocument();
    });
});