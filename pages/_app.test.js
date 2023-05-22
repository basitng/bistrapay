import React from 'react';

const App = () => {
  const [state, setState] = React.useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div>
      <input type="text" value={state} onChange={handleChange} />
    </div>
  );
};

export default App;

// Unit Test
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./_app";

describe("App component", () => {
  it("should render the input field", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("should update the state on input change", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "Test value" } });
    expect(input.value).toBe("Test value");
  });
});