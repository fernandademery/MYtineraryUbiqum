import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../../store/actions/itineraryActions";
import Itinerary from "./Itinerary";
import Header from "../Header";
import { Container, Col, Row } from "react-bootstrap";
import Profile from "../Landing/Profile";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getFavItin } from "../../store/actions/favouriteActions";

export class Itineraries extends Component {
  componentDidMount() {
    console.log(this.props);
    const { cityname } = this.props.match.params;
    this.props.fetchItineraries(cityname);

    // get previous favourite itineraries when the user is logged in.
    if (this.props.authenticated === true) {
      this.props.getFavItin();
    }
  }
  render() {
    console.log(this.props);
    const { itineraries } = this.props.itineraries;
    console.log(itineraries);
    console.log(this.props.match.params.cityname);
    const { cityname } = this.props.match.params;
    const { favourites } = this.props;

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
              <h1 style={style.cityStyle}> {cityname} </h1>{" "}
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
              <div>
                {" "}
                {/* In this loop, I'm mapping through itineraries and returning the Itinerary component for each itinerary
                    this "itinerary={itinerary}" is passing ONE itinerary through props to the Itinerary component*/}{" "}
                {itineraries &&
                  itineraries.map(itinerary => {
                    return (
                      <Itinerary
                        itinerary={itinerary}
                        key={itinerary._id}
                        favourites={favourites}
                      />
                    );
                  })}{" "}
              </div>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <Link to="/cities">
                <h3 style={style.linkStyle}> Choose another city </h3>{" "}
              </Link>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
        <Row style={style.footerStyle}>
          <Col>
            <Footer> </Footer>{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    itineraries: state.itineraries,
    error: state.error,
    authenticated: state.user.authenticated,
    favourites: state.user.user.favourites
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItineraries: cityname => dispatch(fetchItineraries(cityname)),
  getFavItin: () => dispatch(getFavItin())
});

Itineraries.propTypes = {
  itineraries: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
