import React, { Component } from "react";
import blankProfilePicture from "../../blank-profile-picture.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../../store/actions/signupActions";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      profilePic: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.props.logOut(this.props.user.user);
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
    const { authenticated } = this.props.user;
    console.log(authenticated);
    console.log("user in profile component ", this.props.user.user);
    return (
      <div>
        <img
          style={style.profilePic}
          src={blankProfilePicture}
          alt="Login icon"
          width="50px"
        />

        {authenticated && <button onClick={this.onClick}>Log out</button>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    authenticated: state.user.authenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: user => dispatch(logOut(user))
  };
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
