import React from 'react';

        function App() {
            return <div> Hello World! </div>;
        }
        
        // Unit Test
        import { shallow } from 'enzyme';
        import App from './_app';
        
        describe('App Component', () => {
            it('should render correctly', () => {
                const wrapper = shallow(<App />);
                expect(wrapper).toMatchSnapshot();
            });
        });