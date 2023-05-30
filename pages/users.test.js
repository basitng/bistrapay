import React from 'react';
 
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    };
  }
  
  componentDidMount() {
    fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}))
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.state.users.map(user => 
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    );
  }
}

test('shows a list of users when componentDidMount is called', () => {
  // Mock the API response
  fetch.mockResponse(JSON.stringify([{id: 1, name: 'John'}, {id: 2, name: 'Jack'}]));
 
  // Render our component
  const { getByText } = render(<Users />);
 
  // Call the componentDidMount lifecycle method
  act(() => {
    fireEvent.load(window);
  });
 
  // Assert the users are listed
  expect(getByText('John')).toBeInTheDocument();
  expect(getByText('Jack')).toBeInTheDocument();
});