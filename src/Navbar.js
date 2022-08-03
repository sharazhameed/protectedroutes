import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/" className="lnk">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="lnk">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/Signin" className="lnk">
            Signin
          </Link>
        </li>
      </ul>
    </div>
  );
};
