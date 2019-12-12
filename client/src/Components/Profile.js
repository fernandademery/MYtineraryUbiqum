import React, { Component } from "react";
import blankProfilePicture from "../blank-profile-picture.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState(
      {
        showMenu: true
      },
      () => {
        document.addEventListener("click", this.closeMenu);
      }
    );
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
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
      <div style={style.profileButton}>
        <Dropdown>
          <Dropdown.Toggle size="sm" variant="secondary">
            <button style={style.linksProfile} onClick={this.showMenu}>
              <img
                style={style.profilePic}
                src={blankProfilePicture}
                alt="Login icon"
                width="30px"
              />
            </button>
          </Dropdown.Toggle>
          {this.state.showMenu ? (
            <Dropdown.Menu>
              <div
                className="menu"
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <Dropdown.Item>
                  <Link to="/login">
                    <button style={style.linksProfile}>Log in</button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/signup">
                    <button style={style.linksProfile}>Sign up</button>
                  </Link>
                </Dropdown.Item>
              </div>
            </Dropdown.Menu>
          ) : null}
        </Dropdown>
      </div>
    );
  }
}
