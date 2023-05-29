import React from 'react';

import { render, cleanup } from '@testing-library/react';

import {Index} from './index';

describe('Index component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});