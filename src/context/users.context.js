import React, { createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const API_KEY = "https://randomuser.me/api/";
const UserContentProvider = (props) => {
  const [user, setUser] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const addUser = () => {
    setIsLoading(true);
    axios
      .get(API_KEY)
      .then((res) => {
        // Delete the info property
        const { results } = res.data;

        // Add an account_balance attribute
        results[0]["account_balance"] = 0;

        // Get the user object
        const newResult = results[0];

        // store user profile

        setUser((prevUser) => [...prevUser, { ...newResult }]);
        console.log(user);
        // Stop loading
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  // increase account balance by 1
  /*
    change only one uservalue
  */
  const increaseBalance = (id) => {
    const updatedUsers = user.map((user) => {
      if (user.login.uuid === id) {
        return {
          ...user,
          account_balance: user.account_balance + 1000,
        };
      } else {
        return user;
      }
    });
    setUser(updatedUsers);
  };
  const decreaseBalance = (id) => {
    const updatedUsers = user.map((user) => {
      if (user.login.uuid === id) {
        return {
          ...user,
          account_balance: user.account_balance - 1000,
        };
      } else {
        return user;
      }
    });
    setUser(updatedUsers);
  };

  const getUserProfile = (userId) => {
    const newUser = user.filter((person) =>
      person.login.uuid === userId ? person : console.log("No user")
    );

    return { ...newUser };
  };
  return (
    <UserContext.Provider
      value={{
        user,
        increaseBalance,
        decreaseBalance,
        getUserProfile,
        error,
        addUser,
        isLoading,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContentProvider;
