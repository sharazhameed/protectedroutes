import { Auth } from "../context/Context";

import { Navigate } from "react-router-dom";
import React from "react";

export const Protect = ({ children }) => {
  const { isAuth, handler } = React.useContext(Auth);

  if (!isAuth) {
    return <Navigate to="/Signin" />;
  }
  return children;
};
export default Protect;
