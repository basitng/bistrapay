import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton', () => {
  it('should render the button', () => {
    const { getByText } = render(<ActionButton label="Click Me" />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('should call the click handler', () => {
    const clickHandler = jest.fn()
    const { getByText } = render(<ActionButton label="Click Me" onClick={clickHandler} />);

    fireEvent.click(getByText('Click Me'));
    expect(clickHandler).toHaveBeenCalled();
  });
});