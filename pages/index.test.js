import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('Button component test', () => {
  it('should render text on click of button', () => {
    // Arrange
    const buttonText = 'Click Me';
    const { getByText } = render(<button>{buttonText}</button>);
    const expectedText = 'Button has been clicked';

    // Act
    fireEvent.click(getByText(buttonText));

    // Assert
    expect(getByText(expectedText)).toBeInTheDocument();
  });
});