import React from 'react';
import Manage from './Manage';

describe('<Manage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = render(<Manage />);
    });

    it('Should render element with an h1 containing "Manage"', () => {
        const el = wrapper.getByText('Manage');
        expect(el.tagName).toBe('H1');
    });

    it('Should have a button element with text "OK"', () => {
        const el = wrapper.getByText('OK');
        expect(el.tagName).toBe('BUTTON');
    });

    it('Should call a submit function when button is clicked', () => {
        const fnMock = jest.fn();
        wrapper.rerender(<Manage onSubmit={fnMock} />);
        const el = wrapper.getByText('OK');
        fireEvent.click(el);
        expect(fnMock).toBeCalled();
    });
});