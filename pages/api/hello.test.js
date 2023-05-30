import React from 'react';
    
    const Hello = () => {
      return <div>Hello World!</div>;
    }
    
    export default Hello;
    
    // Unit Test Code
    import React from 'react';
    import {render} from 'react-testing-library';
    
    import Hello from './pages/api/hello';
    
    // Test to confirm that the hello component is rendered correctly
    it('should render the hello world text', () => {
        const { getByText } = render(<Hello />);
        expect(getByText('Hello World!')).toBeInTheDocument();
    });