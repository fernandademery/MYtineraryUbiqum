import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../App.css";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <Link className="menu-item" activeClassName="active" to="/">
        Home
      </Link>

      <Link className="menu-item" activeClassName="active" to="/cities">
        MYtineraries
      </Link>

      <a className="menu-item" href="/about">
        About us
      </a>
      <Link className="menu-item" to="/login">
        Log in
      </Link>
      <Link className="menu-item" to="/signup">
        Sign up
      </Link>
    </Menu>
  );
};
