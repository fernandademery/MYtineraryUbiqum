import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import isEmpty from "is-empty";
import PropTypes from "prop-types";
import { loginUser } from "../../store/actions/signupActions";
import Header from "../Header";
import Profile from "../Landing/Profile";
import HamburgerMenu from "../HamburgerMenu";
import "../../App.css";
import Footer from "../Footer";
import { Row, Col, Container } from "react-bootstrap";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
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

    this.setState({
      submitted: true
    });
    const { username, password } = this.state;

    if (isEmpty(username) || isEmpty(password)) {
      return alert("Please submit username and password");
    }

    const user = {
      username: username,
      password: password
    };

    this.props.loginUser(user);
  }

  componentDidUpdate() {
    if (this.props.user.authenticated) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user.authenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    console.log(this.props);

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
          <h1 className="heading-login"> Log in </h1>{" "}
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
                    value={username}
                    required
                    onChange={this.onChange}
                  />{" "}
                  {submitted && !username && (
                    <div className="help-block"> Username is required! </div>
                  )}{" "}
                </Form.Group>{" "}
                <Form.Group>
                  <Form.Label className="control-label"> Password: </Form.Label>{" "}
                  <Form.Control
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    required
                    onChange={this.onChange}
                  />{" "}
                  {submitted && !password && (
                    <div className="help-block"> Password is required! </div>
                  )}{" "}
                  {this.props.error.error && (
                    <h3 className="error"> Wrong username or password.</h3>
                  )}
                  <button className="button-signup"> Log in </button>{" "}
                  {loggingIn && (
                    <img
                      alt="loader"
                      src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                    />
                  )}{" "}
                  <Link to="/signup" className="btn btn-link">
                    Sign up{" "}
                  </Link>{" "}
                </Form.Group>{" "}
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

LogIn.propTypes = {
  user: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    authenticated: state.user.authenticated,
    user: state.user,
    loading: state.user.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
