import React from 'react';
 
const MyApp = props => {
    return (
        <div>
            <h2>Hello World!</h2>
            <p>Welcome to my awesome component!</p>
        </div>
    );
}
 
export default MyApp

import { render } from '@testing-library/react';
 
describe('MyApp', () => {
    it('should render the corrrect content', () => {
        const { getByText } = render(<MyApp />);
        expect(getByText('Hello World!')).toBeInTheDocument();
        expect(getByText('Welcome to my awesome component!')).toBeInTheDocument(); 
    });
});