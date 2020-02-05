import React, { Component } from "react";
import heartEmpty from "../../images/heart_empty.png";
import heartFull from "../../images/heart-full.png";
import { connect } from "react-redux";
import {
  addFavourite,
  removeFavourite
} from "../../store/actions/favouriteActions";
import "../../App.css";

class LikeButton extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLiked: false
  //   };
  // }
  // buttonClick(data) {
  //   if (this.props.favourites.filter(fav => fav._id === data)[0]) {
  //     this.props.removeFavourite(data, this.props.user._id);
  //   } else {
  //     this.props.addFavourite(data, this.props.user._id);
  //   }
  // }

  // addFavouriteItinerary () => {
  //   const {user} = this.props;
  //   if user.
  // }

  render() {
    console.log(this.props);
    let itinerary = this.props;
    let { favourites } = this.props;

    const LikeDisp = (
      <img
        itinerary={itinerary}
        className="LikeButton like"
        onClick={() => this.buttonClick(itinerary._id)}
        src={heartFull}
        style={{ height: "20px" }}
        alt="LikeFull"
        key={itinerary._id}
      />
    );
    const NoLikeDisp = (
      <img
        itinerary={itinerary}
        className="LikeButton dislike"
        onClick={() => this.buttonClick(itinerary._id)}
        src={heartEmpty}
        style={{ height: "20px" }}
        alt="LikeHollow"
        key={itinerary._id}
      />
    );

    const isLike = favourites.filter(favourite => {
      if (favourite._id === itinerary._id) {
        return true;
      }
    });

    return <div>{isLike[0] ? LikeDisp : NoLikeDisp}</div>;
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries.itineraries,
    favourites: state.user.user.favourites,
    user: state.user.user
  };
};

export default connect(mapStateToProps, { addFavourite, removeFavourite })(
  LikeButton
);
