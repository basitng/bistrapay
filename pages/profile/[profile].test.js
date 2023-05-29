import React from 'react';
    
    import Profile from './index';
    
    import { render, cleanup } from 'react-testing-library';
    
    afterEach(cleanup);
    
    describe('<Profile />', ()=>{
        it('should render without errors', ()=>{
            render(<Profile />);
        })
    
        it('should contain the correct name and profile picture', ()=>{
            const { getByText, getByTestId } = render(<Profile name="name" imgUrl="picture.png"/>);
    
            const nameNode = getByText('name');
            expect(nameNode).toBeTruthy();
    
            const profilePictureNode = getByTestId('profile-picture')
            expect(profilePictureNode).toHaveAttribute('src', 'picture.png');
        })
    })