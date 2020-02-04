import React from "react";
import Header from "../Header.js";
import { Container, Col, Row } from "react-bootstrap";
import BrowsingButton from "./BrowsingButton.js";
import Profile from "./Profile.js";
import HamburgerMenu from "../HamburgerMenu";
import Carousel from "./Carousel.js";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Landingv2() {
  const style = {
    bodyStyle: {
      margin: "0",
      padding: "0"
    },
    pStyle: {
      marginTop: "40px"
    },
    buttonStyle: {
      marginTop: "100px"
    },
    profileStyle: {
      marginTop: "15px"
    },
    carouselStyle: {
      marginTop: "30px"
    }
  };
  return (
    <Container
      id="Landing"
      style={style.bodyStyle}
      className="body themed-container"
      fluid={true}
    >
      <Row>
        <Col
          style={style.profileStyle}
          xs={{
            span: 6,
            offset: 7
          }}
          md={{
            span: 2,
            offset: 10
          }}
          lg={1}
        >
          <Profile className="profilepic" />
        </Col>{" "}
      </Row>{" "}
      <Row xs={2}>
        <Col xs={1}>
          <HamburgerMenu />
        </Col>{" "}
      </Row>{" "}
      <Row>
        <Col
          md={{
            span: 12,
            offset: 0
          }}
        >
          <Header />
        </Col>{" "}
      </Row>{" "}
      <Row>
        <Col
          xs={{
            span: 10,
            offset: 1
          }}
          md={{
            span: 8,
            offset: 2
          }}
        >
          <h4 style={style.pStyle} className="pLanding">
            Find your perfect trip, designed by insiders who know and love their
            cities!{" "}
          </h4>{" "}
        </Col>{" "}
      </Row>{" "}
      <Row>
        <Col>
          <Link to="/cities">
            <BrowsingButton style={style.buttonStyle} />{" "}
          </Link>{" "}
        </Col>{" "}
      </Row>{" "}
      <Row>
        <Col md={12} lg={12} style={style.carouselStyle}>
          <Carousel syle={style.carouselStyle} />{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
}
