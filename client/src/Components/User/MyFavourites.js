import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Col, Row } from "react-bootstrap";
import Profile from "../Landing/Profile";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Header from "../Header";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

function MyFavourites(props) {
  const style = {
    bodyStyle: {
      padding: "0px",
      position: "relative",
      minHeight: "100vh"
    },
    profileStyle: {
      marginTop: "15px"
    },
    cityStyle: {
      backgroundColor: "#8C2A3C",
      color: "white",
      paddingTop: "15px",
      paddingBottom: "15px",
      marginTop: "15px",
      marginBottom: "15px"
    },
    buttonStyle: {
      width: "200px",
      height: "40px",
      fontSize: "30px"
    },
    imgStyle: {
      width: "90px",
      borderRadius: "50%",
      padding: "5px"
    },
    linkStyle: {
      color: "brown",
      marginTop: "20px"
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
    }
  };

  const { favourites } = props.user.user;
  console.log(favourites);

  const price = favourite => {
    if (favourite.price === 1) {
      return <span> $ </span>;
    }
    if (favourite.price === 2) {
      return <span> $$ </span>;
    }
    if (favourite.price === 3) {
      return <span> $$$ </span>;
    }
    if (favourite.price === 4) {
      return <span> $$$$ </span>;
    } else {
      return <span> $$$$$ </span>;
    }
  };

  return (
    <Container
      className="themed-container"
      fluid={true}
      style={style.bodyStyle}
    >
      <div style={style.contentwrapStyle} className="content-wrap">
        <Row style={style.profileStyle}>
          <Col
            xs={{
              span: 1,
              offset: 9
            }}
            md={{
              span: 1,
              offset: 10
            }}
            lg={{
              span: 1,
              offset: 11
            }}
          >
            <Profile className="profilepic" />
          </Col>{" "}
        </Row>{" "}
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
            <h1 style={style.cityStyle}> My Favourites </h1>{" "}
          </Col>{" "}
        </Row>{" "}
        {favourites ? (
          favourites.map(favourite => {
            return (
              <React.Fragment>
                <Card>
                  <Card.Body className="flex-container">
                    <div>
                      <img
                        src={favourite.img}
                        alt="Profile pic"
                        style={style.imgStyle}
                      />
                      <h4> {favourite.author} </h4>
                    </div>
                    <div>
                      <Card.Title title={favourite.city} key={favourite.title}>
                        {" "}
                        {favourite.city}
                      </Card.Title>
                      <Card.Subtitle
                        className="mb-2 text-muted"
                        key={favourite.itineraryId}
                      >
                        {favourite.title}
                      </Card.Subtitle>
                      <Card.Text>
                        {favourite.rating}
                        likes {favourite.duration}
                        hours {price(favourite)}{" "}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </React.Fragment>
            );
          })
        ) : (
          <React.Fragment>
            <h2 style={{ marginTop: "20px", marginBottom: "20px" }}>
              {" "}
              You haven't selected your favourite itineraries yet{" "}
            </h2>

            <Link to="/cities">
              <Button variant="info" style={style.buttonStyle}>
                Start browsing!
              </Button>
            </Link>
          </React.Fragment>
        )}
      </div>
      <Row style={style.footerStyle}>
        <Col>
          <Footer> </Footer>{" "}
        </Col>{" "}
      </Row>{" "}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    authenticated: state.user.authenticated
  };
};

MyFavourites.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MyFavourites);
