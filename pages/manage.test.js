import React from 'react';

class ManagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        const response = fetch('/api/message')
            .then(res => res.json())
            .then(data => this.setState({ message: data.message }));
    }

    render() {
        return (
            <div>
                Management page:
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default ManagePage;


import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ManagePage from './manage';

afterEach(cleanup);

//Mock data
const mockResponse = {
    message: 'Manage page!'
}

//Mock API fetch call
global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
        json: () => Promise.resolve(mockResponse)
    });
});

describe('ManagePage Component', () => {
    test('renders manage page message', async () => {
        //Arrange
        const { findByTestId } = render(<ManagePage />);

        //Act
        const manageElement = await findByTestId('message');

        //Assert
        expect(manageElement.innerHTML).toBe('Manage page!');
    });
});