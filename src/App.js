import "./App.css";
import React from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Cart } from "./Cart";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./Signin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
