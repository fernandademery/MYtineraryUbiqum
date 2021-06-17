import React from "react";
import homeIcon from "../images/homeIcon.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Link to="/">
      <footer>
        <img src={homeIcon} alt="Home icon" width="40px" />
      </footer>{" "}
    </Link>
  );
}
