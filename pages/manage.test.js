import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import ManagePage from './ManagePage';
    
    describe('Manage Page', () => {
      it('shows the page correctly', () => {
        const { container } = render(<ManagePage />);
        expect(container.innerHTML).toMatch('<h1>Manage Page</h1>');
        expect(container.querySelector('button')).toHaveTextContent('Create');
      });
    
      it('form fields are working correctly', () => {
        const { getByLabelText} = render(<ManagePage />);
        const jobTitleInput = getByLabelText('Job Title');
        fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
        expect(jobTitleInput.value).toBe('Software Engineer');
      });
    
      it('creates successfully', () => {
        const { getByText, getByLabelText } = render(<ManagePage />);
        const jobTitleInput = getByLabelText('Job Title');
        fireEvent.change(jobTitleInput, { target: { value: 'Software Engineer' } });
        const createBtn = getByText('Create');
        fireEvent.click(createBtn);
        expect(getByText('Successfully created a job!')).toBeInTheDocument();
      });
    });