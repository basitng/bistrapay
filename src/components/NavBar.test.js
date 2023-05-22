import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  it("should show the correct number of navigation links", () => {
    const { getAllByTestId } = render(<NavBar />);
    expect(getAllByTestId("nav-link")).toHaveLength(3);
  });

  it("should show the correct navigation link text", () => {
    const { getByText } = render(<NavBar />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("should open the dropdown menu when the hamburger icon is clicked", () => {
    const { getByTestId, getByRole } = render(<NavBar />);
    fireEvent.click(getByTestId("hamburger-icon"));
    expect(getByRole("listbox")).toBeInTheDocument();
  });
});