import React from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChangeName} />
      <input type="number" onChange={handleChangeAge} />
    </div>
  );
};

// Unit test with React Testing Library
import { render, fireEvent, screen } from '@testing-library/react';

describe('<App />', () => {
  test('should change name when user enters name', () => {
    render(<App />);
    const nameInput = screen.getByRole('textbox');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    expect(nameInput.value).toBe('John');
  });

  test('should change age when user enters age', () => {
    render(<App />);
    const ageInput = screen.getByRole('spinbutton');
    fireEvent.change(ageInput, { target: { value: 15 } });
    expect(ageInput.value).toBe(15);
  });
    
});