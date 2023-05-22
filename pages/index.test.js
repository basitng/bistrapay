import React from 'react';

const Index = () => {
   return (
      <div>
         <h1>Index Page</h1>
      </div>
   );
}

export default Index;

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Index from './index';

afterEach(cleanup);

describe('Index page', () => {
   it('Render Index page', () => {
      const { getByText } = render(<Index />);
      const indexElement = getByText(/Index Page/i);
      expect(indexElement).toBeInTheDocument();
   });
});