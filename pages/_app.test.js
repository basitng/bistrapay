//Using Jest Library
    describe('App Component', () => {
        it('renders correctly', () => {
            const component = shallow(
                <App />
            );

            expect(component).toMatchSnapshot();
        });
    })