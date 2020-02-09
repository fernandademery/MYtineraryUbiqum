import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
import Activities from "./Activities";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import starEmpty from "../../images/Star_Empty-512.png";
import starFull from "../../images/star-full.png";
import PropTypes from "prop-types";
import {
  addFavourite,
  removeFavourite
} from "../../store/actions/favouriteActions";
import axios from "axios";
import { Input } from "antd";

export class Itinerary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      expand: false,
      CommentLists: [],
      comment: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    // "itinerary" was passed in as prop from the Itineraries component - where we're mapping through all itineraries.
    const { itinerary } = this.props;

    console.log(this.props);

    this.setState({
      activities: itinerary.activities
    });
    this.getComments();
  }

  // Managing favourites:
  addFavouriteItinerary = () => {
    const { user } = this.props;
    if (user.authenticated === true) {
      const { _id, title, city } = this.props.itinerary;
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
    const { user } = this.props;
    if (user.authenticated === true) {
      const { _id } = this.props.itinerary;
      const itinerary = {
        itineraryId: _id
      };
      console.log(itinerary);
      this.props.removeFavourite(itinerary);
    }
  };

  // Managing comments
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e, newComment) {
    e.preventDefault();
    console.log(this.props);
    const variables = {
      content: this.state.comment,
      writer: this.props.user.user.id,
      postId: this.props.PostId,
      itinerary: this.props.itinerary._id
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    axios
      .post("http://localhost:5000/comments/savecomment", variables, config)
      .then(response => {
        if (response.data.success) {
          this.setState({
            comment: ""
          });
          this.updateComment(response.data.result);
        } else {
          alert("Failed to save comment!");
        }
      });
  }

  updateComment = newComment => {
    this.setState({ CommentLists: this.state.CommentLists.concat(newComment) });
  };

  getComments = itineraryId => {
    axios.post(`http://localhost:5000/comments/getcomments`).then(response => {
      console.log(response);
      if (response.data.success) {
        console.log(response.data);
        this.setState({
          CommentLists: response.data.comments
        });
      }
    });
  };

  render() {
    const { itinerary } = this.props;

    const style = {
      itineraryStyle: {
        marginBottom: "10px"
      },
      imgStyle: {
        width: "90px",
        borderRadius: "50%",
        padding: "5px"
      },
      commentImgStyle: {
        width: "40px",
        borderRadius: "50%"
      }
    };
    console.log(itinerary.price);
    const price = itinerary => {
      if (itinerary.price === 1) {
        return <span> $ </span>;
      }
      if (itinerary.price === 2) {
        return <span> $$ </span>;
      }
      if (itinerary.price === 3) {
        return <span> $$$ </span>;
      }
      if (itinerary.price === 4) {
        return <span> $$$$ </span>;
      } else {
        return <span> $$$$$ </span>;
      }
    };

    const { expand } = this.state;

    const { favourites } = this.props.favourites;
    const favItin = favourites.filter(
      favourite => favourite.itineraryId === itinerary._id
    );

    let star;
    if (favItin.length > 0) {
      star = (
        <img
          className="LikeButton like"
          onClick={this.removeFavouriteItinerary}
          src={starFull}
          style={{
            height: "20px"
          }}
          alt="LikeFull"
          key={itinerary._id}
        />
      );
    } else {
      star = (
        <img
          className="LikeButton dislike"
          onClick={this.addFavouriteItinerary}
          src={starEmpty}
          style={{
            height: "20px"
          }}
          alt="LikeHollow"
          key={itinerary._id}
        />
      );
    }
    const { TextArea } = Input;
    return (
      <div style={style.itineraryStyle}>
        <Card>
          <Card.Body className="flex-container">
            <div>
              <img style={style.imgStyle} src={itinerary.img} alt="Profile" />
              <h4> {itinerary.author} </h4>{" "}
            </div>{" "}
            <div>
              <Card.Title title={itinerary.title} key={itinerary.title}>
                {" "}
                {star} {itinerary.title}{" "}
              </Card.Title>{" "}
              <Card.Subtitle className="mb-2 text-muted" key={itinerary._id}>
                {" "}
                {itinerary.rating}
                likes {itinerary.duration}
                hours {price(itinerary)}{" "}
              </Card.Subtitle>
              <Card.Text>
                {" "}
                {itinerary.tag.map((hash, i) => (
                  <span key={i}> {hash} </span>
                ))}{" "}
              </Card.Text>{" "}
            </div>{" "}
          </Card.Body>{" "}
          <div className="container-activities">
            <div>
              {" "}
              {/* If expand is false, the button says "View all", else the button says "back" */}{" "}
              {this.state.expand ? (
                <Button
                  style={style.buttonStyle}
                  variant="info"
                  onClick={() =>
                    this.setState({
                      expand: !this.state.expand
                    })
                  }
                >
                  Hide activities{" "}
                </Button>
              ) : (
                <Button
                  style={style.buttonStyle}
                  variant="info"
                  onClick={() =>
                    this.setState({
                      expand: !this.state.expand
                    })
                  }
                >
                  View activities{" "}
                </Button>
              )}{" "}
            </div>{" "}
            <div className="container-activ-expand">
              {" "}
              {/* The same way we passed one itinerary as props from the Itineraries component to the Itinerary component
          we're now passing the activities as props to the Activities component for that I can refer to one itinerary
          and specify that I'm only passing the activities "activities={itinerary.activities}". */}{" "}
              {expand && <Activities activities={itinerary.activities} />}{" "}
            </div>{" "}
          </div>{" "}
          <div>
            <h2 style={{ textAlign: "left", paddingTop: "20px" }}> Comments</h2>
            <br />
            {/* Comment List */}
            {console.log(this.state.CommentLists)}
            {this.state.CommentLists &&
              this.state.CommentLists.map(onecomment => {
                if (onecomment.itinerary === itinerary._id) {
                  return (
                    <React.Fragment>
                      <Card>
                        <Card.Body className="flex-container-comment">
                          <div style={{ alignSelf: "center" }}>
                            <img
                              style={style.commentImgStyle}
                              src={onecomment.writer.picture}
                              alt="Profile"
                            />{" "}
                          </div>
                          <div
                            style={{ justifySelf: "left", paddingLeft: "10px" }}
                          >
                            <Card.Title>
                              {" "}
                              {onecomment.writer.username}:{" "}
                            </Card.Title>
                            <Card.Text>{onecomment.content}</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </React.Fragment>
                  );
                }
              })}

            {this.props.user.authenticated && (
              <form
                style={{
                  dislay: "grid !important",
                  gridTemplateColumns: "75% 25% !important"
                }}
                onSubmit={this.onSubmit}
              >
                {" "}
                <TextArea
                  style={{
                    width: "70%",
                    borderRadius: "5px",
                    marginTop: "10px"
                  }}
                  onChange={this.handleChange}
                  value={this.state.comment}
                  placeholder="Write your comment here"
                  name="comment"
                />
                <Button
                  onClick={this.onSubmit}
                  style={{
                    width: "80px",
                    height: "30px",
                    fontSize: "15px",
                    marginBottom: "25px",
                    borderRadius: "5px"
                  }}
                  variant="info"
                >
                  Submit
                </Button>
              </form>
            )}
          </div>
        </Card>{" "}
      </div>
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
