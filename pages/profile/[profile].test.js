import React from 'react';
    import { render, fireEvent, waitFor } from 'react-testing-library';
    import Profile from '../../Profile';
    
    describe('<Profile />', () => {
        it('Should render', () => {
            const { container } = render(<Profile />);

            expect(container.firstChild).toMatchSnapshot(); //to check if the component is rendered
        })
    
        it('Should handle changes', async ()=>{
            const { getByTestId, getAllByTestId, getByLabelText } = render(<Profile />);

            fireEvent.click(getByTestId('profileCard')); //simulating the button click
            expect(getAllByTestId('modal').length).toBe(1); //to check if the modal is opened

            fireEvent.change(getByLabelText('Name'), { target: { value: 'John' } }); //simulating the input value change
            fireEvent.click(getByTestId('modalSaveButton')); //simulating the save button for the modal

            await waitFor(() => {
                expect(getByLabelText('Name').value).toBe('John'); //to check if the input value is updated
            });
        })
    })