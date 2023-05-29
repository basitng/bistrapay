//using Jest test library
        describe("User page", () => { 
            test("page renders correctly", () => { 
                const wrapper = shallow(<Users />);
                expect(wrapper).toMatchSnapshot();
             }); 
        }); 

        describe("User page", () => { 
            test("User component rendered without error", () => { 
                const component = shallow(<Users />);
                expect(component.find("User").length).toEqual(1);
            }); 
        });