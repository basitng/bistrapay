import React from 'react'
    import ReactDOM from 'react-dom'
    import { App } from './App';
    import { shallow } from 'enzyme' 

    describe('App', () => {
      let wrapper; 
      beforeEach(() => {
        wrapper = shallow(<App />)
      })
  
      it('should render properly', () => {
        expect(<App />).toBeDefined()
        expect(<App />).toMatchSnapshot()
      })
    })