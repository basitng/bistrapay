import React from 'react';

const HelloPage = () => {
 return( 
   <div>
      <h1>Hello World!</h1>
   </div>
 );
}

export default HelloPage;

import React from 'react';
import {render, screen} from '@testing-library/react';
import HelloPage from './hello';

describe('HelloPage', () => {
  test('renders the `Hello World!` heading', () => {
    render(<HelloPage />);

    const heading = screen.getByText('Hello World!');

    expect(heading).toBeInTheDocument();
  });
});