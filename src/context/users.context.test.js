import { mockUserData } from "../../test/mockData/users/mockUserData";
    import { UsersContext } from "./users.context";

    describe("UsersContext unit testing", () => {
      it("Should return an object with 'userData' key", () =>{
        const contextValue = UsersContext();
        expect(contextValue).toHaveProperty("userData");
      });

      it("Should return an object containing the mockUserData", () => {
        const contextValue = UsersContext();
        expect(contextValue.userData).toEqual(mockUserData);
      });
    });