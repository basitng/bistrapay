// using None
    // Unit Test
    import { shallow, mount } from "enzyme";
    import ManagePage from "./pages/manage";

    describe('ManagePage Component', () => {
      it('should render a "div" element that contains the text "manage page"', () => {
        const wrapper = shallow(<ManagePage />);
        expect(wrapper.find('div').text()).toBe('manage page');
      });

      it('should have a "content" div that has a "className" of "content"', () => {
        const wrapper = mount(<ManagePage />);
        expect(wrapper.find('.content').length).toEqual(1);
      });
    });