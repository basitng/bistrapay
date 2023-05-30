import React from "react";
    import {shallow} from "enzyme";
    import Header from "../components/Header";

    describe("Header component", () => {
        it("Should render a header tagged div", () => {
            // arrange
            const component = shallow(<Header />);
    
            // act
            const wrapper = component.find("div.Header");
    
            // assert
            expect(wrapper.length).toBe(1);
        });

        it("Should render a logo", () => {
            // arrange
            const component = shallow(<Header />);
    
            // act
            const wrapper = component.find("Logo");
    
            // assert
            expect(wrapper.length).toBe(1);
        });     
    });