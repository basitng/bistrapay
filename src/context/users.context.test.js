import React from 'react';
    import {UserContext} from './users.context';

    function UserComponent(props) {
     const user = UserContext.useUser()
     return(
         <div>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h2>{user.role}</h2>
         </div>
     )
    }

    //Unit Test
    import React from "react";
    import { render, cleanup, waitForElement } from "@testing-library/react";
    import { UserContext } from "./users.context";
    import UserComponent from "../UserComponent";

    afterEach(cleanup);

    const testUser = {
        name: "Yugesh",
        age: 30,
        role: "Admin"
    };

    function renderUserComponent(user) {
      const rendered =  render(
        <UserContext.Provider value={user}>
        <UserComponent />
        </UserContext.Provider>
      );
      return rendered;
    };

    describe("Test the user component", () => {
      test("user is defined and rendered", () => {
        const { getByText } = renderUserComponent(testUser);
  
        waitForElement(() => getByText(testUser.name));
        waitForElement(() => getByText(testUser.age));
        waitForElement(() => getByText(testUser.role));
      });
    });