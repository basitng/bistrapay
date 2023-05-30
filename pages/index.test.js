import React from 'react';
     import { act } from 'react-dom/test-utils';
     import { render, fireEvent } from '@testing-library/react';
     import App from '../components/App';
     
     describe('App component', () => {
        it('Should display "Welcome to App" on screen', () => {
            const { getByText } = render(<App />);
            let welcomeText = getByText('Welcome to App');
            expect(welcomeText).toBeInTheDocument();
        });
        
        it('Should update title when new value is entered', () => {
            const { getByText, getByPlaceholderText } = render(<App />);
            const titleInput = getByPlaceholderText('Enter Title');
    
            act(() => {
                fireEvent.change(titleInput, { target: { value: 'New App Title' } });
            });
            
            let newTitle = getByText('New App Title');
            expect(newTitle).toBeInTheDocument();
        });
    });