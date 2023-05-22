import React from 'react';
import {render, fireEvent} from '@testing-library/react';

describe('The _app component', () => {
  it('should render the page', () => {
    const {getByText, getByLabelText} = render(
      <_app />
    );
    const titleElement = getByText(/my page/i);
    expect(titleElement).toBeInTheDocument();
    const inputElement = getByLabelText('input-text');
    expect(inputElement).toBeInTheDocument();
   });
  
  it('should change page title when text is entered', () => {
    const {getByText, getByLabelText} = render(
      <_app />
    );
    const titleElement = getByText(/my page/i);
    expect(titleElement).toBeInTheDocument();

    const inputElement = getByLabelText('input-text');
    fireEvent.change(inputElement, { target: { value: 'Hello World' } });
    const newTitleElement = getByText(/Hello World/i);
    expect(newTitleElement).toBeInTheDocument();
  });
});