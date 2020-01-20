import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { userSignupRequest } from "../../store/actions/signupActions";

class SignUpPage extends Component {
  render() {
    const { userSignupRequest } = this.props;

    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }} xs={4}>
            <SignUp userSignupRequest={userSignupRequest} />
          </Col>
        </Row>
      </Container>
    );
  }
}

// SignUpPage.propTypes = {
//   userSignupRequest: React.propTypes.func.isRequired
// };

export default connect(
  state => {
    return {};
  },
  { userSignupRequest }
)(SignUpPage);
