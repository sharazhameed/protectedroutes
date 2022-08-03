import React from "react";

const Auth = React.createContext(undefined);

const Context = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const handler = (isAuth) => setIsAuth(isAuth);

  return <Auth.Provider value={{ isAuth, handler }}>{children}</Auth.Provider>;
};

export default Context;
export { Auth };
