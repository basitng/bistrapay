import React from 'react';

     export const Hello = () => {
       const [message, setMessage] = React.useState('Welcome to React');

       return (
         <div>
           <div className="message">{message}</div>
           <button onClick={() => setMessage('Hello From React!')}>
             Click Me
           </button>
         </div>
       );
     };


      import React from 'react';
      import { render, fireEvent, screen } from '@testing-library/react';
      import { Hello } from './Hello';

      //Author: John Doe
      //Date: mm/dd/yyyy

      describe('Hello', () => {
        //Arrange
        beforeEach(() => {
          render(<Hello />);
        });

        it('are the correct initial message is displayed', () => {
           //Act
           const messageElement = screen.getByText(/Welcome to React/i);
          
           //Assert
           expect(messageElement).toBeInTheDocument();
        });

        it('are the updated message is displayed after clicking the button', () => {
           //Act
           fireEvent.click(screen.getByText(/Click Me/i));

           //Assert
          expect(screen.getByText(/Hello From React/i)).toBeInTheDocument();
        });
      });