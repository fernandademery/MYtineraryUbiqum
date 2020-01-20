import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class SignUp extends Component {
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
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    //this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <Form.Group>
          <Form.Label className="control-label">Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            className="form-control"
            value={this.state.username}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">First name:</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            className="form-control"
            value={this.state.firstname}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">Last name:</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            className="form-control"
            value={this.state.lastname}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">
            Password confirmation:
          </Form.Label>
          <Form.Control
            type="password"
            name="passwordConfirmation"
            className="form-control"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="control-label">Picture:</Form.Label>
          <Form.Control
            type="text"
            name="picture"
            className="form-control"
            value={this.state.picture}
            onChange={this.onChange}
          />
        </Form.Group>

        <button>Sign up</button>
      </form>
    );
  }
}

// SignUp.propTypes = {
//   userSignupRequest: React.propTypes.func.isRequired
// };
