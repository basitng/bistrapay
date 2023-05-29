import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'
import { userReducer } from './user.reducer'

describe('userReducer', () => { 
  let store;

  beforeEach(() => {
    store = createStore(userReducer)
  })

  test('Update the user name', () => {
    expect(userReducer({name:'mark'}, {type:'UPDATE_USER_NAME', name:'mark jones'})).toEqual({name:'mark jones'})
  }) 

  test('Delete user name', () => {
    expect(userReducer({name:'mark'}, {type:'DELETE_USER_NAME'})).toEqual({name:''})
  }) 

})