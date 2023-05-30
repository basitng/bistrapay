//using jest to write the unit test
    describe('Index page', () => {
        test('Determine if the page is rendered correctly', () => {
            //generate a mock of the component
            const renderedComponent = shallow(<Index />);
            expect(renderedComponent).toMatchSnapshot();
        });
    });