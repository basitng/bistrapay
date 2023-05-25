import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

describe('NavBar Component', () => {
    it('displays the correct text', () => {
      const { getByText } = render(<NavBar />);

      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('About')).toBeInTheDocument();
      expect(getByText('Content')).toBeInTheDocument();
    });

    it('onClick function works correctly', () => {
      const { getByText } = render(<NavBar handleClick={mockFunc} />);

      fireEvent.click(getByText('Home'));

      expect(mockFunc).toHaveBeenCalledTimes(1);
      expect(mockFunc).toHaveBeenCalledWith('Home');

      fireEvent.click(getByText('About'));

      expect(mockFunc).toHaveBeenCalledTimes(2);
      expect(mockFunc).toHaveBeenCalledWith('About');

      fireEvent.click(getByText('Content'));

      expect(mockFunc).toHaveBeenCalledTimes(3);
      expect(mockFunc).toHaveBeenCalledWith('Content');
    });
});

function mockFunc() {
    mockFunc.mock.calls = [];
}