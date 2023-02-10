import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //logged in user currentyly set uo tickle122, plan to add a switch user function in future
  const [loggedInUser, setLoggedInUser] = useState("tickle122");

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};
