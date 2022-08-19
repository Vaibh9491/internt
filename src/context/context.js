import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [todoDetails, setTodoDetails] = useState();
  const [click, setClick] = useState(false);

  return (
    <StateContext.Provider
      value={{
        userData,
        setUserData,
        todoDetails,
        setTodoDetails,
        click,
        setClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
