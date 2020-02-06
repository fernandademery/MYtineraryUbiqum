import React, {
  Component
} from "react";
import {
  Card
} from "react-bootstrap";
import "../../App.css";
import Activities from "./Activities";
import {
  connect
} from "react-redux";
import Button from "react-bootstrap/Button";
import starEmpty from "../../images/Star_Empty-512.png";
import starFull from "../../images/star-full.png";

import PropTypes from "prop-types";
import {
  addFavourite,
  removeFavourite
} from "../../store/actions/favouriteActions";

export class Itinerary extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      expand: false
    };
  }
  componentDidMount() {
    // "itinerary" was passed in as prop from the Itineraries component - where we're mapping through all itineraries.
    const {
      itinerary
    } = this.props;

    console.log(itinerary.activities);
    this.setState({
      activities: itinerary.activities
    });
  }

  addFavouriteItinerary = () => {
    const {
      user
    } = this.props;
    if (user.authenticated === true) {
      const {
        _id,
        title,
        city
      } = this.props.itinerary;
      const likedItinerary = {
        itineraryId: _id,
        name: title,
        city: city
      };
      this.props.addFavourite(likedItinerary);
    } else {
      alert("Login to manage your favourite itineraries!");
      window.location.href = "/login";
    }
  };

  removeFavouriteItinerary = () => {
    const {
      user
    } = this.props;
    if (user.authenticated === true) {
      const {
        _id
      } = this.props.itinerary;
      const itinerary = {
        itineraryId: _id
      };
      console.log(itinerary);
      this.props.removeFavourite(itinerary);
    }
  };

  render() {
    const {
      itinerary
    } = this.props;

    const style = {
      itineraryStyle: {
        marginBottom: "10px"
      },
      imgStyle: {
        width: "90px",
        borderRadius: "50%",
        padding: "5px"
      }
    };
    console.log(itinerary.price);
    const price = itinerary => {
      if (itinerary.price === 1) {
        return <span > $ < /span>;
      }
      if (itinerary.price === 2) {
        return <span > $$ < /span>;
      }
      if (itinerary.price === 3) {
        return <span > $$$ < /span>;
      }
      if (itinerary.price === 4) {
        return <span > $$$$ < /span>;
      } else {
        return <span > $$$$$ < /span>;
      }
    };

    const {
      expand
    } = this.state;

    const {
      favourites
    } = this.props.favourites;
    const favItin = favourites.filter(
      favourite => favourite.itineraryId === itinerary._id
    );

    let star;
    if (favItin.length > 0) {
      star = ( <
        img className = "LikeButton like"
        onClick = {
          this.removeFavouriteItinerary
        }
        src = {
          starFull
        }
        style = {
          {
            height: "20px"
          }
        }
        alt = "LikeFull"
        key = {
          itinerary._id
        }
        />
      );
    } else {
      star = ( <
        img className = "LikeButton dislike"
        onClick = {
          this.addFavouriteItinerary
        }
        src = {
          starEmpty
        }
        style = {
          {
            height: "20px"
          }
        }
        alt = "LikeHollow"
        key = {
          itinerary._id
        }
        />
      );
    }

    return ( <
      div style = {
        style.itineraryStyle
      } >
      <
      Card >
      <
      Card.Body className = "flex-container" >
      <
      div >
      <
      img style = {
        style.imgStyle
      }
      src = {
        itinerary.img
      }
      alt = "Profile" / >
      <
      h4 > {
        itinerary.author
      } < /h4> <
      /div> <
      div >
      <
      Card.Title title = {
        itinerary.title
      }
      key = {
        itinerary.title
      } > {
        star
      } {
        itinerary.title
      } <
      /Card.Title> <
      Card.Subtitle className = "mb-2 text-muted"
      key = {
        itinerary._id
      } > {
        itinerary.rating
      }
      likes {
        itinerary.duration
      }
      hours {
        " "
      } {
        price(itinerary)
      } <
      /Card.Subtitle>

      <
      Card.Text > {
        itinerary.tag.map((hash, i) => ( <
          span key = {
            i
          } > {
            hash
          } < /span>
        ))
      } <
      /Card.Text> <
      /div> <
      /Card.Body> <
      div className = "container-activities" >
      <
      div > {
        /* If expand is false, the button says "View all", else the button says "back" */ } {
        this.state.expand ? ( <
          Button style = {
            style.buttonStyle
          }
          variant = "info"
          onClick = {
            () => this.setState({
              expand: !this.state.expand
            })
          } >
          Back <
          /Button>
        ) : ( <
          Button style = {
            style.buttonStyle
          }
          variant = "info"
          onClick = {
            () => this.setState({
              expand: !this.state.expand
            })
          } >
          View all <
          /Button>
        )
      } <
      /div> <
      div className = "container-activ-expand" > {
        /* The same way we passed one itinerary as props from the Itineraries component to the Itinerary component
          we're now passing the activities as props to the Activities component for that I can refer to one itinerary
          and specify that I'm only passing the activities "activities={itinerary.activities}". */
      } {
        expand && < Activities activities = {
          itinerary.activities
        }
        />} <
        /div> <
        /div> <
        /Card> <
        /div>
      );
    }
  }

  Itinerary.propTypes = {
    user: PropTypes.object.isRequired,
    favourites: PropTypes.array.isRequired
  };

  const mapStateToProps = (state, ownProps) => {
    console.log("Itinerary component state", state);
    return {
      itineraries: state.itineraries,
      authenticated: state.user.authenticated,
      user: state.user,
      favourites: state.favourites
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      addFavourite: favourite => dispatch(addFavourite(favourite)),
      removeFavourite: itinerary => dispatch(removeFavourite(itinerary))
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);