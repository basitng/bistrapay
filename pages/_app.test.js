import React from 'react';
        import { render } from 'react-testing-library';
    
        function App(){
           return (
    	      <div>
                <h1 className="Heading">Welcome to our App</h1>
    	     </div> 
           )
        }
    
        //Writing a unit test using react-testing-library
        test('renders App component', () => {
          const { getByText } = render(<App />);
          const headingElement = getByText(/Welcome to our App/i);
          expect(headingElement).toBeInTheDocument();  
        });