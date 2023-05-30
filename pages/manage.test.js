import React from 'react';
    import ManageDashboard from './ManageDashboard';
     
    describe('ManageDashboard', () => {
        it('should render with no errors', () => {             
            const { container } = render(<ManageDashboard />);             
            expect(container.firstChild).toMatchSnapshot(); 
         }); 
 
        it('should render a title', () => {
            const { getByTestId } = render(<ManageDashboard />);
            const title = getByTestId('title-id');
            expect(title).toBeInTheDocument();
         }); 
 
        it('should render a table', () => {
            const { getByTestId } = render(<ManageDashboard />);
            const table = getByTestId('table-id');
            expect(table).toBeInTheDocument();
        });
    });