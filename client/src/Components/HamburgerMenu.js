import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../App.css";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/mytineraries">
        MYtineraries
      </a>

      <a className="menu-item" href="/about">
        About us
      </a>
      <a className="menu-item" href="/login">
        Log in
      </a>
      <a className="menu-item" href="signup">
        Sign up
      </a>
    </Menu>
  );
};
