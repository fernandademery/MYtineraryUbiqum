import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../store/actions/signupActions";

function HamburgerMenu(props) {
  console.log(props);
  const { authenticated } = props.user;
  const style = {
    menuStyle: {
      color: "#b8b7ad",
      textDecoration: "none",
      backgroundColor: "#373a47",
      border: "none"
    }
  };

  return (
    <Menu>
      <Link className="menu-item" style={style.menuStyle} to="/">
        Home
      </Link>

      <Link className="menu-item" activeClassName="active" to="/cities">
        MYtineraries
      </Link>

      <a className="menu-item" href="/about">
        About us
      </a>
      {authenticated ? (
        <React.Fragment>
          <Link className="menu-item" to="/myAccount" style={style.menuStyle}>
            My account
          </Link>{" "}
          <br></br>
          <button onClick={props.logOut} style={style.menuStyle}>
            Logout
          </button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link style={style.menuStyle} className="menu-item" to="/login">
            LogIn
          </Link>{" "}
          <br></br>
          <Link className="menu-item" style={style.menuStyle} to="/signup">
            Sign up
          </Link>
        </React.Fragment>
      )}
    </Menu>
  );
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    authenticated: state.user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

HamburgerMenu.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);
