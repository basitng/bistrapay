import React from 'react';
    import {render} from '@testing-library/react';

    const App = () => {
        return <div>Hello App</div>
    }
    
    test('Renders App component', () => {
        const {container} = render(<App />);
        expect(container).not.toBeNull();
    })