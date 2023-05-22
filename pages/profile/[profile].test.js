import React from 'react';

function Profile({name, age, gender}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

describe('Profile Component', () => {
    it('should render the name, age, and gender', () => {
      const { getByText } = render(<Profile name="John Doe" age={25} gender="Male" />);
      
      expect(getByText('Name: John Doe')).toBeInTheDocument();
      expect(getByText('Age: 25')).toBeInTheDocument();
      expect(getByText('Gender: Male')).toBeInTheDocument();
    });
});