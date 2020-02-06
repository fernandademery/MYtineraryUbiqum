import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import {
  userSignupRequest,
  fetchUsers,
  loginUser
} from "../../store/actions/signupActions";
import Header from "../Header";
import Profile from "../Landing/Profile";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import Footer from "../Footer";
import { Row, Col, Container } from "react-bootstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      firstname: "",
      lastname: "",
      picture: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.userSignupRequest(this.state);
  }

  render() {
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
      }
    };

    return (
      <Container
        className="themed-container"
        fluid={true}
        style={style.bodyStyle}
      >
        <div className="contentwrap" style={style.contentwrapStyle}>
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
          <h1 className="heading-login"> Join our community! </h1>{" "}
          <Row>
            <Col
              xs={{
                span: 8,
                offset: 2
              }}
            >
              <form onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label className="control-label"> Username: </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label">
                    {" "}
                    First name:{" "}
                  </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    name="firstname"
                    className="form-control"
                    value={this.state.firstname}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label">
                    {" "}
                    Last name:{" "}
                  </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    name="lastname"
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label"> Email: </Form.Label>{" "}
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label"> Password: </Form.Label>{" "}
                  <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label">
                    Confirm your password:
                  </Form.Label>{" "}
                  <Form.Control
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    value={this.state.passwordConfirmation}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label"> Picture: </Form.Label>{" "}
                  <Form.Control
                    type="text"
                    name="picture"
                    className="form-control"
                    value={this.state.picture}
                    onChange={this.onChange}
                  />{" "}
                </Form.Group>{" "}
                {this.props.error.error && (
                  <h3 className="error"> {this.props.error.error} </h3>
                )}{" "}
                <button className="button-signup"> Sign up </button>{" "}
              </form>{" "}
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

SignUp.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.users,
    error: state.error,
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  userSignupRequest,
  loginUser
})(SignUp);
