import "./App.css";
import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Cart } from "./Cart";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./Signin";
import Protect from "./protectedRoutes/Protect";
import SignOut from "./SignOut";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/Cart"
          element={
            <Protect>
              <Cart />
            </Protect>
          }
        />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
