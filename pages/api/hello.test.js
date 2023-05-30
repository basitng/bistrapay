import React from "react";

const HelloPage = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Welcome to my page.</p>
    </div>
  );
};

export default HelloPage;

// React Testing Library Unit Test for HelloPage Component
import { render } from "@testing-library/react";
import React from "react";
import HelloPage from "pages/api/hello";

describe("HelloPage", () => {
  test("renders page header", () => {
    const { getByText } = render(<HelloPage />);
    const headerElement = getByText("Hello World!");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders welcome message", () => {
    const { getByText } = render(<HelloPage />);
    const messageElement = getByText("Welcome to my page.");
    expect(messageElement).toBeInTheDocument();
  });
});