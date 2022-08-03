import React from "react";
import { Auth } from "./context/Context";
import { Navigate } from "react-router-dom";

export const SignOut = () => {
  const { handler } = React.useContext(Auth);

  handler(false);

  return <Navigate to={"/"} />;
};

export default SignOut;
