import React from "react";
import { bubble as Menu } from "react-burger-menu";
import "../App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function HamburgerMenu(props) {
  console.log(props);
  const { authenticated } = props.user;
  return (
    <Menu>
      <Link className="menu-item" activeClassName="active" to="/">
        Home
      </Link>

      <Link className="menu-item" activeClassName="active" to="/cities">
        MYtineraries
      </Link>

      <a className="menu-item" href="/about">
        About us
      </a>
      {/* <Link className="menu-item" to="/login">
        Log in
      </Link> */}
      {authenticated ? (
        <React.Fragment>
          <Link className="menu-item" to="/myAccount">
            My account
          </Link>
        </React.Fragment>
      ) : (
        <Link className="menu-item" to="/logIn">
          LogIn
        </Link>
      )}
      <Link className="menu-item" to="/signup">
        Sign up
      </Link>
    </Menu>
  );
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
};

HamburgerMenu.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HamburgerMenu);
