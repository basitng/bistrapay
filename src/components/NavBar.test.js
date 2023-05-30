import React from 'react';
    import { shallow } from 'enzyme';
    import NavBar from './NavBar';

    describe('NavBar component', () => {
        it('renders without crashing', () => {
            shallow(<NavBar />);
        });
    });