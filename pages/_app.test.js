import React from 'react'
    import {render} from 'react-testing-library'
    
    const App = () => {
        return (<div>Header</div>)
    }
    
    describe('App Component', () => {
        it('Should display the Header ', () => {
            const { getByText } = render(<App />);
            const header = getByText(/header/i);
            expect(header).toBeInTheDocument();
        });
    });