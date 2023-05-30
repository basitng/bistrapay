import React from 'react';

function Hello() {
  return <div>Hello world!</div>;
}

export default Hello;

// Unit test for the ReactCode
import React from 'react';
import { render } from '@testing-library/react';

import Hello from './pages/api/hello';

describe('Hello World Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Hello />);
    expect(getByText('Hello world!')).toBeInTheDocument();
  });
});