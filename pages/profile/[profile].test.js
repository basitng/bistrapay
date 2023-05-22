import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "../Profile";

describe("Profile", () => {
  it("renders the correct profile title", () => {
    const profileTitle = "My Profile";
    render(<Profile title={profileTitle} />);

    expect(screen.getByText(profileTitle)).toBeInTheDocument();
  });

  it("renders the correct profile description", () => {
    const profileDescription = "This is my profile";
    render(<Profile description={profileDescription} />);

    expect(screen.getByText(profileDescription)).toBeInTheDocument();
  });

  it("renders the correct profile image", () => {
    const profileImage = "image.jpg";
    render(<Profile image={profileImage} />);

    expect(screen.getByAltText("Profile Image")).toHaveAttribute(
      "src",
      profileImage
    );
  });
});