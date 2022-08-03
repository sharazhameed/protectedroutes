import React from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Auth } from "./context/Context";

export const Signin = () => {
  const navigate = useNavigate();

  const { handler } = React.useContext(Auth);
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const handleChange = () => {
    if (username !== "admin" && password !== "admin") {
      alert("404");
      return;
    }
    //alert("check");
    handler(true);
    navigate("/cart");
  };

  return (
    <>
      <div>
        <Navbar />
        <h1>Sign in</h1>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleChange}>Submit</button>
      </div>
    </>
  );
};
