import React from 'react';
    import App from './_app';

    describe('App component', () => {
      it('should render', () => {
        const { container } = render(<App />);
        expect(container).not.toBeNull();
        expect(container.firstChild).toMatchSnapshot();
      });
    });