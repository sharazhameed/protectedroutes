import React from "react";

const Auth = React.createContext(undefined);
const dispatch = React.createContext(undefined);
const Context = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const handler = (isAuth) => setIsAuth(isAuth);

  return (
    <Auth.Provider value={isAuth}>
      <dispatch value={{ handler }}>{children}</dispatch>
    </Auth.Provider>
  );
};
const useProtect = () => {
  const context = React.useContext(Auth);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useHandle = () => {
  const context = React.useContext(dispatch);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useUserContext = () => {
  return [useProtect(), useHandle()];
};

export { useHandle, useProtect, useUserContext };

export default Context;
