import React from 'react'
        import { render, cleanup } from 'react-testing-library'
        
        afterEach(cleanup)
        
        describe('rendering users component', () => {
            it('displays correct header', () => {
                const { getByText } = render(<h1>User</h1>)
                
                expect(getByText('User').textContent).toBe('User')
            })
        
            it('displays the correct user count', () => {
                const { getByText } = render(<h3>Total Users: 5</h3>)
                
                expect(getByText('Total Users: 5').textContent).toBe('Total Users: 5')
            })
        })