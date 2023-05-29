import React from 'react';

    function MyApp(){
        const [name, setName] = React.useState('John');

        const changeName = () =>
            setName(name === 'John' ? 'Paul' : 'John');

        return (
            <div>
                <h2>{name}</h2>
                <button onClick={changeName}>Change Name</button>
            </div>
        );
    }

    // Unit Test
    import React from "react";
    import { render, fireEvent } from "@testing-library/react";
    import MyApp from "./_app";
    
    describe("MyApp Component", () => {
        it("should test name state and onclick button functionality", () => {
            const { getByText, getByTestId } = render(<MyApp />);

            // Content should show John initially
            expect(getByTestId("name-state").textContent).toBe("John");

            // Click the button to change the state to Paul
            fireEvent.click(getByText("Change Name"));

            // Content should show Paul after change
            expect(getByTestId("name-state").textContent).toBe("Paul");
        });
    });