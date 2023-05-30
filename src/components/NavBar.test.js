import React from 'react';
import { render } from '@testing-library/react';
import NavBar from './NavBar'

describe("NavBar Component", () => {
    test('Component is rendered correctly in UI', ()=>{
        const { getByText } = render(<NavBar />);
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("About")).toBeInTheDocument();
        expect(getByText("FAQ")).toBeInTheDocument();
    })
})