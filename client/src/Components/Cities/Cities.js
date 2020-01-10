import React, { Component } from "react";
import CityList from "./CityList.js";
import { connect } from "react-redux";
import { fetchCities } from "../../store/actions/cityActions";
import Header from "../Header";
import { Container, Col, Row } from "react-bootstrap";
import { Form, Input } from "reactstrap";
import Profile from "../Landing/Profile";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import Footer from "../Footer";

class Cities extends Component {
  constructor() {
    super();

    this.state = {
      cityFilter: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  handleChange(e) {
    this.setState({
      cityFilter: e.target.value
    });
  }

  render() {
    console.log(this.props.cities);
    const filteredCities = this.props.cities.filter(city => {
      console.log(city.name);
      const citylc = city.name.toLowerCase();
      const filter = this.state.cityFilter;
      return citylc.includes(filter);
    });

    const style = {
      bodyStyle: {
        padding: "0px"
      },
      menuStyle: {
        top: "55px",
        position: "fixed"
      },
      citiesStyle: {
        marginTop: "20px"
      },
      footerStyle: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#F0F0F2",
        margin: "0",
        paddingTop: "5px",
        paddingBottom: "5px"
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
            <HamburgerMenu style={style.menuStyle} />{" "}
          </Col>{" "}
        </Row>{" "}
        <Row>
          <Col>
            <Header />
          </Col>{" "}
        </Row>
        <div>
          <h1> Cities </h1>{" "}
          <Row>
            <Col
              xs={{
                span: 10,
                offset: 1
              }}
              md={{
                span: 6,
                offset: 3
              }}
            >
              <Form>
                <Input
                  type="search"
                  placeholder="Filter by city..."
                  onKeyUp={this.handleChange}
                  onSubmit="return false"
                />
              </Form>{" "}
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
              <div style={style.citiesStyle}>
                <CityList cities={filteredCities} />{" "}
              </div>{" "}
            </Col>{" "}
          </Row>
          <Row style={style.footerStyle}>
            <Col>
              <Footer> </Footer>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
      </Container>
    );
  }
}

const mapStatetoProps = (state, ownProps) => {
  console.log(state);
  return {
    cities: state.cities.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCities: () => dispatch(fetchCities)
});

export default connect(mapStatetoProps, mapDispatchToProps)(Cities);
