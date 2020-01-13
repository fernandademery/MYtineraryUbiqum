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

export class Itineraries extends Component {
  componentDidMount() {
    console.log(this.props);
    const { cityname } = this.props.match.params;
    this.props.fetchItineraries(cityname);
  }
  render() {
    console.log(this.props);
    const { itineraries } = this.props.itineraries;
    console.log(itineraries);
    console.log(this.props.match.params.cityname);
    const { cityname } = this.props.match.params;

    const style = {
      bodyStyle: {
        padding: "0px"
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
        bottom: "0",
        width: "100%",
        backgroundColor: "#F0F0F2",
        margin: "0",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginTop: "30px"
      }
    };

    return (
      <Container
        className="themed-container"
        fluid={true}
        style={style.bodyStyle}
      >
        <Row>
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
        </Row>
        <Row>
          <Col>
            <Header />
          </Col>{" "}
        </Row>
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
            <h1 style={style.cityStyle}>{cityname}</h1>
          </Col>
        </Row>
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
              {itineraries &&
                itineraries.map(itinerary => {
                  return (
                    <Itinerary itinerary={itinerary} key={itinerary._id} />
                  );
                })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/cities">
              <h3 style={style.linkStyle}>Choose another city</h3>
            </Link>
          </Col>
        </Row>
        <Row style={style.footerStyle}>
          <Col>
            <Footer> </Footer>{" "}
          </Col>{" "}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    itineraries: state.itineraries
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItineraries: cityname => dispatch(fetchItineraries(cityname))
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
