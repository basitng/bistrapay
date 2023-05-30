import React from 'react';

const Header = () => (
    <div>
        <h1>Header</h1>
    </div>
);

export default Header;

import React from "react";
import { render, screen } from "@testing-library/react";

describe('Header', () => {
  it('contains header element', () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});