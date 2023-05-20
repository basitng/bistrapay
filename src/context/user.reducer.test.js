Test Example for user.reducer.js using React Testing Library

import { configure, shallow, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import UserReducer from './user.reducer';
import { SET_USER_DATA, RESET_USER_DATA } from '../actionTypes';

configure({ adapter: new Adapter() });

// Test Component Rendering
describe('UserReducer', () => {
    it('should render correctly', () => {
        const initialState = {
            user: null
        };
        const wrapper = shallow(<UserReducer initialState={initialState} />);
        expect(wrapper).toMatchSnapshot();
    });
});

// Test Props and State
describe('UserReducer', () => {
    it('should set user data correctly', () => {
        const initialState = {
            user: null
        };
        const wrapper = shallow(<UserReducer initialState={initialState} />);
        const action = {
            type: SET_USER_DATA,
            payload: {
                email: 'test@example.com',
                name: 'Test User'
            }
        }
        const newState = UserReducer(initialState, action);
        expect(newState).toEqual({
            user: {
                email: 'test@example.com',
                name: 'Test User'
            }
        });
    });

    it('should reset user data correctly', () => {
        const initialState = {
            user: {
                email: 'test@example.com',
                name: 'Test User'
            }
        };
        const wrapper = shallow(<UserReducer initialState={initialState} />);
        const action = {
            type: RESET_USER_DATA
        }
        const newState = UserReducer(initialState, action);
        expect(newState).toEqual({
            user: null
        });
    });
});