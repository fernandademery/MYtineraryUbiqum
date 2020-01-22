import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label className="control-label"> Email: </Form.Label>{" "}
          <Form.Control
            type="text"
            name="email"
            className="form-control"
            value={this.state.email}
            required
            onChange={this.onChange}
          />{" "}
        </Form.Group>
        <Form.Group>
          <Form.Label className="control-label"> Password: </Form.Label>{" "}
          <Form.Control
            type="password"
            name="password"
            className="form-control"
            value={this.state.password}
            required
            onChange={this.onChange}
          />{" "}
          <button className="button-signup"> Log in </button>
        </Form.Group>
      </Form>
    );
  }
}
