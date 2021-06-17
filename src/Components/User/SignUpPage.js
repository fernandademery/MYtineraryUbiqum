import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { userSignupRequest } from "../../store/actions/signupActions";
import PropTypes from "prop-types";

class SignUpPage extends Component {
  render() {
    const { userSignupRequest } = this.props;
    console.log(userSignupRequest);

    return (
      <Container
        className="themed-container"
        fluid={true}
        style={style.bodyStyle}
      >
        {" "}
        <Row>
          <Col
            md={{
              span: 4,
              offset: 4
            }}
            xs={4}
          >
            <SignUp userSignupRequest={userSignupRequest} />{" "}
          </Col>{" "}
        </Row>{" "}
      </Container>
    );
  }
}

SignUpPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  userSignupRequest: userData => dispatch(userSignupRequest(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
