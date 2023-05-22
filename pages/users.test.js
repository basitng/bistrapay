import React from 'react';

const User = ({name, age}) => {
  return <div> {name} is {age} </div>;
};

describe('User Component', () => {
  it('should render user name and age', () => {
    const userData = {name: 'John', age: 25};
    const { getByText } = render(<User {...userData} />);

    expect(getByText('John is 25')).toBeInTheDocument();
  });
});