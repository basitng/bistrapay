import React from 'react';

const Manage = () => {
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        name: '',
        quantity: 0
      }
    ]);
  };

  const handleChange = (i, e) => {
    const { name, value } = e.target;
    const list = [...items];
    list[i] = {
      ...list[i],
      [name]: value
    };
    setItems(list);
  };

  const handleRemove = i => {
    const list = [...items];
    list.splice(i, 1);
    setItems(list);
  };

  return (
    <div>
      <button type="button" onClick={addItem}>
        Add Item
      </button>
      {items.map((item, i) => (
        <div key={i}>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={e => handleChange(i, e)}
          />
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={e => handleChange(i, e)}
          />
          <button type="button" onClick={() => handleRemove(i)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Manage;

//Unit Test
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Manage from './pages/manage';

describe('Manage Component', () => {
  it('renders with initial state', () => {
    const { queryByTestId } = render(<Manage />);
    expect(queryByTestId('items')).toBeNull();
  });

  it('renders with an item', () => {
    const { queryByTestId } = render(<Manage />);
    fireEvent.click(queryByTestId('add-item'));
    expect(queryByTestId('items')).not.toBeNull();
  });

  it('updates item name', () => {
    const { queryByTestId } = render(<Manage />);
    fireEvent.click(queryByTestId('add-item'));
    const nameInput = queryByTestId('item-name');
    fireEvent.change(nameInput, { target: { value: 'Test' } });
    expect(nameInput.value).toBe('Test');
  });

  it('updates item quantity', () => {
    const { queryByTestId } = render(<Manage />);
    fireEvent.click(queryByTestId('add-item'));
    const quantityInput = queryByTestId('item-quantity');
    fireEvent.change(quantityInput, { target: { value: 2 } });
    expect(quantityInput.value).toBe('2');
  });

  it('removes an item', () => {
    const { queryByTestId } = render(<Manage />);
    fireEvent.click(queryByTestId('add-item'));
    const removeButton = queryByTestId('remove-item');
    fireEvent.click(removeButton);
    expect(queryByTestId('items')).toBeNull();
  });
});