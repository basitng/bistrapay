import React from "react";
    import { render } from "react-testing-library";
    import MyComponent from "./MyComponent";
    
    describe("MyComponent", () => {
      // Write your test cases here
        test('MyComponent should render correct content', () => {
           const { getByText } = render(<MyComponent />);
           expect(getByText('MyComponent Text')).toBeInTheDocument();
        });
        
        test('MyComponent should render a button', () => {
           const { getByText } = render(<MyComponent />);
           expect(getByText('My Button')).toBeInTheDocument();
        });
        
        test('Button should be disabled on initial load', () => {
           const { getByText } = render(<MyComponent />);
           const button = getByText('My Button');
           expect(button).toBeDisabled();
        });
    });