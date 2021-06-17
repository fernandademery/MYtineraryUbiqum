import React from "react";
import MYtineraryLogo from "../MYtineraryLogo.png";
import Col from "react-bootstrap/Col";
import "../App.css";

export default function Header() {
  const style = {
    headerStyle: {
      marginTop: "30px",
      justifyContent: "center",
      padding: "0"
    }
  };
  return (
    <Col
      xs={12}
      sm={12}
      md={{
        span: 6,
        offset: 3
      }}
      style={style.headerStyle}
    >
      <div justifySelf="center">
        <header>
          <img
            className="body-responsive"
            src={MYtineraryLogo}
            alt="MYtinerary logo"
            width="70%"
          />
        </header>{" "}
      </div>{" "}
    </Col>
  );
}
