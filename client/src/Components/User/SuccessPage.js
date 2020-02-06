import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "../Landing/Carousel";
import Footer from "../Footer";

export default function SuccessPage() {
  const style = {
    bodyStyle: {
      padding: "0px"
    },
    profileStyle: {
      marginTop: "15px"
    },
    footerStyle: {
      position: "fixed",
      bottom: "-2px",
      width: "100%",
      backgroundColor: "#F0F0F2",
      margin: "0",
      paddingTop: "5px",
      paddingBottom: "5px",
      marginTop: "50px"
    },
    contentwrapStyle: {
      paddingBottom: "5rem"
    },
    h2Style: {
      fontSize: "20px"
    }
  };
  return (
    <Container
      className="themed-container"
      fluid={true}
      style={style.bodyStyle}
    >
      <div className="contentwrap" style={style.contentwrapStyle}>
        {" "}
        <Row>
          <Col>
            <HamburgerMenu />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <Header />
          </Col>{" "}
        </Row>{" "}
        <h1 className="heading-login"> Thanks! </h1>{" "}
        <Row>
          <Col
            xs={{
              span: 8,
              offset: 2
            }}
          >
            <h2 style={style.h2Style}>
              {" "}
              Now you're a member in our community!{" "}
            </h2>{" "}
            <Row>
              <Col>
                <Link to="/login">
                  <button className="button-signup"> Login </button>{" "}
                </Link>{" "}
              </Col>{" "}
            </Row>{" "}
            <h2 style={style.h2Style}> To see all itineraries </h2>{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col md={12} lg={12} style={style.carouselStyle}>
            <Carousel syle={style.carouselStyle} />{" "}
          </Col>{" "}
        </Row>{" "}
      </div>{" "}
      <Row style={style.footerStyle}>
        <Col>
          <Footer> </Footer>{" "}
        </Col>{" "}
      </Row>
    </Container>
  );
}
