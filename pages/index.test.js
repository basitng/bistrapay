import React from 'react';
    
    const IndexPage = () => {
        return (
            <div>
                <h1>Welcome to my homepage!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur purus sed erat elementum, vel lacinia urna volutpat. Nunc varius ligula eu magna tincidunt, in volutpat nisi rutrum.
                </p>
            </div>
        );
    };
    
    export default IndexPage;

import React from 'react';
import { render } from '@testing-library/react';

describe('Index page', () => {
    it('should display a welcome message', () => {
        const { getByText } = render(<IndexPage />);
        expect(getByText('Welcome to my homepage!')).toBeInTheDocument();
    });

    it('should display a message with lorem ipsum text', () => {
        const { getByText } = render(<IndexPage />);
        expect(getByText(/Lorem ipsum/)).toBeInTheDocument();
    });
});