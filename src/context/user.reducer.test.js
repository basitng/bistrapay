// Unit test written with react-testing-library
import { render, fireEvent,  waitForElement } from '@testing-library/react'
import userReducer from '../src/context/user.reducer';

describe('Testing user.reducer', () => {
    
    let initialState 
    beforeEach(() => {
      initialState = {
        data: {},
        isLoading: false,
        hasError: false
      }
    })
    
    // Test for FETCH_STARTED
    test('should dispatch FETCH_STARTED', () => {
        const newState = userReducer(initialState, {type: 'FETCH_STARTED'})
        expect(newState.isLoading).toBe(true)
        expect(newState.hasError).toBe(false)
    })
    
    // Test for FETCH_SUCCESS
    test('should dispatch FETCH_SUCCESS', () => {
        const data = {test_data: 123}
        const newState = userReducer(initialState, {type: 'FETCH_SUCCESS', payload: data})
        expect(newState.data).toBe(data)
        expect(newState.isLoading).toBe(false)
    })
    
    // Test for FETCH_ERROR
    test('should dispatch FETCH_ERROR', () => {
        const newState = userReducer(initialState, {type: 'FETCH_ERROR'})
        expect(newState.isLoading).toBe(false)
        expect(newState.hasError).toBe(true)
    })
})