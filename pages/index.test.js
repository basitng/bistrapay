import React from 'react';

const IndexPage = () => {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default IndexPage;

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import IndexPage from './index';

test('it should display the name when entered in the input', () => {
  const { getByText, getByPlaceholderText } = render(<IndexPage />);

  const input = getByPlaceholderText('Name');
  fireEvent.change(input, { target: { value: 'John' } });

  expect(getByText('Hello, John!')).toBeInTheDocument();
});