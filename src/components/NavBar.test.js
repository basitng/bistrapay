import React from "react";
    import { render, cleanup } from "react-testing-library";
    import NavBar from "./NavBar";
    
    afterEach(cleanup);
    
    describe("NavBar", () => {
        it('renders the correct number of NavBar components', () => {
            const { getAllByTestId } = render(
                <NavBar items={['Home','About', 'Contact']} />
            );
            expect(getAllByTestId('nav-bar').length).toBe(3);
        });
    });