import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Profile from "./profile";

describe("Profile Component", () => {
  test("Renders the profile component", () => {
    const { getByText } = render(<Profile />);
    getByText("User Profile");
  });

  test("Renders the user info correctly", () => {
    const { getByText } = render(<Profile />);
    getByText("Name: John Doe");
    getByText("Age: 28");
    getByText("Occupation: Software Engineer");
  });

  test("Clicking the 'Edit' button should toggle the edit form", () => {
    const { getByText, getByTestId } = render(<Profile />);

    // Initially, the edit form should not be visible
    expect(getByTestId("edit-form")).not.toBeVisible();

    // Clicking the 'Edit' button should make the form visible
    fireEvent.click(getByText("Edit"));
    expect(getByTestId("edit-form")).toBeVisible();

    // Clicking the 'Cancel' button should hide the form
    fireEvent.click(getByText("Cancel"));
    expect(getByTestId("edit-form")).not.toBeVisible();
  });
});