import React from 'react';

function Hello() {
  return (
    <h1>Hello World</h1>
  );
}

export default Hello;

//unit test
import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import the Hello component
import Hello from '../pages/api/hello';

describe('<Hello />', () => {
    afterEach(cleanup);
    it('should render the greeting "Hello World" inside an h1', () => { 
        const { getByTestId } = render(<Hello />);
        expect(getByTestId('hello-greeting').textContent).toBe('Hello World');
    }); 
});