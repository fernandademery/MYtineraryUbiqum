import React, { Component } from "react";
import blankProfilePicture from "../blank-profile-picture.png";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    const style = {
      profilePic: {
        borderRadius: "50%"
      },
      linksProfile: {
        backgroundColor: "white",
        cursor: "pointer",
        border: "none",
        display: "block"
      }
    };

    return (
      <img
        style={style.profilePic}
        src={blankProfilePicture}
        alt="Login icon"
        width="50px"
      />
    );
  }
}
