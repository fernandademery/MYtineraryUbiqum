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
  }

  render() {
    const style = {
      profilePic: {
        borderRadius: "50%"
      },
      linksProfile: {
        backgroundColor: "#f2bbd5",
        cursor: "pointer",
        border: "none",
        display: "inline",
        textAlign: "center",
        marginRight: "8px"
      },
      welcomeMessage: {
        display: "flex-row"
      }
    };
    const { authenticated } = this.props.user;
    console.log(authenticated);
    console.log("user in profile component ", this.props.user.user);
    return (
      <div>
        {" "}
        {authenticated ? (
          <React.Fragment>
            <img
              style={style.profilePic}
              src={this.props.user.user.avatarPicture}
              alt="user"
              width="50px"
            />
          </React.Fragment>
        ) : (
          <img
            style={style.profilePic}
            src={blankProfilePicture}
            alt="Login icon"
            width="50px"
          />
        )}
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
