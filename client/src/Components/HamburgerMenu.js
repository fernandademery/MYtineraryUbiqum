import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../App.css";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        MYtineraries
      </a>

      <a className="menu-item" href="/pizzas">
        About us
      </a>
    </Menu>
  );
};
