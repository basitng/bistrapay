import React from "react";
    import UserProfile from "../../components/UserProfile";
    import { render, unmountComponentAtNode } from "react-dom";
    import { act } from "react-dom/test-utils";

    let container = null;
    beforeEach(() => {
      // setup a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      // cleanup on exiting
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });
    
    describe("Test UserProfile component", () => {

      test("Renders the component & check the user data provided", () => {
        const userData = {
          name: 'John',
          surname: 'Doe',
          imgPath: './images/avatar.jpg'
        };
        
        act(() => {
          render(<UserProfile userData={userData}/>, container);
        });
        
        const userNameElem = container.querySelector('#name');
        const surnameElem = container.querySelector('#surname');
        const avatarElem = container.querySelector('#avatar');

        expect(userNameElem.textContent).toBe(userData.name);
        expect(surnameElem.textContent).toBe(userData.surname);
        expect(avatarElem.src).toContain(userData.imgPath);
    });
});