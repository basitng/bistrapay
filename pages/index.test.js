import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';

function App() {
    const [userInput, setUserInput] = useState("");
    const [data, setData] = useState([]);
    const { register, handleSubmit } = useForm();
    
    useEffect(() => {
        fetch('/endpoint')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);
    
    const onSubmit = async (data) => {
        const res = await fetch('/endpoint', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            setUserInput("");
            const newData = await res.json();
            setData([...data, newData])
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="input"
                    value={userInput}
                    ref={register}
                    onChange={e => {setUserInput(e.target.value)}}
                />
            <input type="submit" value="Submit" />
            </form>
            <div>
                {data.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    )
}

export default App;

None:
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should update userInput state on change of input value', () => {
    wrapper.find('input[name="input"]').simulate('change', {
      target: {
        value: 'user input'
      }
    });
    expect(wrapper.find('input[name="input"]').prop('value')).toBe('user input');
  });

  it('should make a post request when form is submitted', () => {
    wrapper.find('form').simulate('submit');
    expect(fetch).toHaveBeenCalledWith('/endpoint', {
      method: 'post',
      body: JSON.stringify(''),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  it('should update data state when post request is successful', async () => {
    wrapper.find('form').simulate('submit', {
      name: 'name'
    });
    const res = {
      ok: true,
      json: () => ({
        name: 'name',
        id: 'id'
      })
    };
    await expect(fetch).resolves.toEqual(res);
    expect(wrapper.find('div').first().prop('children')).toEqual([
      'name',
    ]);
  });
});