import React from "react";
import Col from "react-bootstrap/Col";
import BrowsingButton from "./BrowsingButton";
import LoginLink from "./LoginLink";
import CreateAccLink from "./CreateAccLink";
import Row from "react-bootstrap/Row";

export default function ctaCities() {
  const style = {
    ctaStyle: {
      justifyContent: "center",
      marginTop: "30px",
      marginBottom: "30px"
    },
    rowlinks: {
      justifyContent: "center"
    }
  };
  return (
    <Col xs={12}>
      <div>
        <p style={style.ctaStyle}>
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>{" "}
        <h2> Start browsing </h2> <BrowsingButton />
        <p> Want to build your own MYtinerary ? </p>{" "}
        <Row style={style.rowlinks}>
          <Col
            xs={4}
            md={{
              span: 3,
              offset: 0
            }}
          >
            {" "}
            <LoginLink />
          </Col>{" "}
          <Col
            xs={{
              span: 5,
              offset: 0
            }}
            md={{
              span: 3,
              offset: 0
            }}
          >
            <CreateAccLink />
          </Col>{" "}
        </Row>{" "}
      </div>{" "}
    </Col>
  );
}
