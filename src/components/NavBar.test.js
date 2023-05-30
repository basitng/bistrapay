import React from 'react';
    import {render, fireEvent, cleanup } from '@testing-library/react'
    import NavBar from './NavBar';
    
    // Test 
    describe("NavBar component test", () => {
        afterEach(cleanup);

        it ("Renders nav without crashing", () => {
            const { getByTestId } =  render(<NavBar />)
            const navBar = getByTestId('NavBar');
            expect(navBar).not.toBeNull();
        });
    
        it("Should display a NavBar with lists of items when clicked on hamburger icon",  () => {
            const { getByTestId, getByText } =  render(<NavBar />);
            const hamburgerIcon = getByTestId('hamburgerIcon');
            fireEvent.click(hamburgerIcon);
            const listItems = getByTestId('nav-list');
            expect(listItems).not.toBeNull();
        });

        it("Should call a onClick function", () => {
            const onClickFn = jest.fn();
            const { getByTestId } =  render(<NavBar onClick={onClickFn} />);
            const hamburgerIcon = getByTestId('hamburgerIcon');
            fireEvent.click(hamburgerIcon);
            expect(onClickFn).toHaveBeenCalled(); 
        });

    });