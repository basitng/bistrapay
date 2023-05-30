import React from 'react';
    import { render } from '@testing-library/react';
    
    const App = () => {
    return (
        <div>
        <h1>Welcome</h1>
        <p>This is App component.</p>
        </div>
    );
    }
    
    describe("App component", () => {
    it("should render a heading and a paragarph", () => {
        const { getByText } = render(<App />);
        expect(getByText("Welcome")).toBeInTheDocument();
        expect(getByText("This is App component.")).toBeInTheDocument();
    });
    });