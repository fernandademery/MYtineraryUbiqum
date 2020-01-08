import React, { Component } from "react";

export default class Itinerary extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>Itinerary</h1>
      </div>
    );
  }
}
