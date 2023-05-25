import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Index from './index';

describe('Index', () => {
   afterEach(cleanup);

   it('should render the index component', () => {
      const {queryByTestId} = render(<Index/>);

      const indexElement = queryByTestId('index-element');
      expect(indexElement).toBeTruthy();
   });

   it('should render the expected content', () => {
      const {queryByTestId} = render(<Index/>);

      const indexElement = queryByTestId('index-element');
      expect(indexElement.innerHTML).toMatchSnapshot();
   });

});