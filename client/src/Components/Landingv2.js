import React from "react";
import Header from "./Header.js";
import { Container, Col, Row } from "react-bootstrap";
import BrowsingButton from "./BrowsingButton.js";
import Profile from "./Profile.js";
import HamburgerMenu from "./HamburgerMenu";
import Carousel from "./Carousel.js";
import "../App.css";
import { Link } from "react-router-dom";

export default function Landingv2() {
  const style = {
    bodyStyle: {
      justifyContent: "right",
      margin: "0",
      padding: "0"
      // marginRight: "0px",
      // marginLeft: "0px"
    },
    pStyle: {
      marginTop: "40px"
    },
    buttonStyle: {
      marginTop: "100px"
    },
    profileStyle: {
      marginTop: "20px"
    },
    carouselStyle: {
      marginTop: "30px"
    }
  };
  return (
    <Container id="Landing" style={style.bodyStyle} className="body">
      <Row>
        <Col
          style={style.profileStyle}
          xs={{ span: 1, offset: 9 }}
          md={{ span: 1, offset: 1 }}
        >
          <Profile className="profilepic" />
        </Col>
      </Row>
      <Row xs={2}>
        <Col xs={1}>
          <HamburgerMenu />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 1 }}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 3 }}>
          <p style={style.pStyle} className="pLanding">
            Find your perfect trip, designed by insiders who know and love their
            cities!{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 2, offset: 6 }}>
          <Link to="/cities">
            <BrowsingButton style={style.buttonStyle} />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 1 }} style={style.carouselStyle}>
          <Carousel syle={style.carouselStyle} />
        </Col>
      </Row>
    </Container>
  );
}
