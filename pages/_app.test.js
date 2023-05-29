import React from "react";
import { render } from "@testing-library/react";
import App from "./pages/_app";

describe('App', () => {
  
  test("renders the App component", () => {
    const {queryByTestId} = render(<App />);
    expect(queryByTestId('app')).toBeInTheDocument();
  });

});