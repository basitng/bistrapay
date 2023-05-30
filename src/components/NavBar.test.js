//Use the React Testing Library
    import React from 'react';
    import {render, fireEvent, screen} from "@testing-library/react"
    import NavBar from './NavBar';
    
    describe('NavBar Component', () => {
        it('should render the NavBar correctly', () => {
            const {getByRole} = render(<NavBar />);
            expect(getByRole("navigation").children.length).toBe(3)
        });

        it("should call the onChange when the input changes", () => {
            const mockHandleChange = jest.fn()
            const {getByRole} = render(<NavBar onChange={mockHandleChange}/>)
            const input = getByRole("textbox")
            fireEvent.change(input, {target: {value: "This is a test"}})
            expect(mockHandleChange).toHaveBeenCalledTimes(1)
        })
    })