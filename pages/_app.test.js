import React from "react";
    
    import { render } from "@testing-library/react";
    import App from "./_app";

    describe("/pages/_app.js", () => {
	  it("should render the App component", () => {
	    const { getByText } = render(<App />);
	    const header = getByText("Welcome");
	    expect(header).toBeInTheDocument();
	  });
	});