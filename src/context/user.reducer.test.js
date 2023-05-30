// Test Library: Jest 

describe('User Reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      user: {
        id: '',
        name: '',
      },
      loading: false
    }

    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should set loading state when log in', () => {
    const loadingState = {
      user: {
        id: '',
        name: '',
      },
      loading: true
    }

    const action = {
      type: LOG_IN
    }

    expect(userReducer({}, action)).toEqual(loadingState)
  })

  it('should update user when log in success', () => {

    const newUser = {
      id: '123',
      name: 'John Doe'
    }

    const successState = {
      user: newUser,
      loading: false
    }

    const action = {
      type: LOG_IN_SUCCESS,
      payload: newUser
    }

    expect(userReducer({}, action)).toEqual(successState)
    
  })
})