import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "../pages/api/hello";

describe("Hello page", () => {
  test("renders hello world message", () => {
    render(<Hello />);
    const message = screen.getByText("Hello World!");

    expect(message).toBeInTheDocument();
  });
});