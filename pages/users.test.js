Solution:

        import { shallow } from 'enzyme';
        import users from '../pages/users';
    
        describe('Users page tests', () => {
            let wrapper;
    
            beforeEach(() => {
                wrapper = shallow(<users />);
            });
    
            it('should contain a `List` component', () => {
                expect(wrapper.find('List').exists()).toBe(true);
            });
        });