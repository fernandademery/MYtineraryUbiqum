import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
import Activities from "./Activities";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import LikeButton from "./LikeButton";

export class Itinerary extends Component /*({ itinerary })*/ {
  constructor() {
    super();
    this.state = {
      activities: [],
      expand: false
    };
  }
  componentDidMount() {
    // "itinerary" was passed in as prop from the Itineraries component - where we're mapping through all itineraries.
    const { itinerary } = this.props;
    console.log(itinerary.activities);
    this.setState({
      activities: itinerary.activities
    });
  }

  render() {
    console.log(this.state);
    const { itinerary } = this.props;
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
        return <span>$</span>;
      }
      if (itinerary.price === 2) {
        return <span>$$</span>;
      }
      if (itinerary.price === 3) {
        return <span>$$$</span>;
      }
      if (itinerary.price === 4) {
        return <span>$$$$</span>;
      } else {
        return <span>$$$$$</span>;
      }
    };

    const { activities, expand } = this.state;
    console.log(activities);

    const { authenticated } = this.props;

    return (
      <div style={style.itineraryStyle}>
        <Card>
          <Card.Body className="flex-container">
            <div>
              <img style={style.imgStyle} src={itinerary.img} alt="Profile" />
              <h4>{itinerary.author}</h4>
            </div>
            <div>
              <Card.Title title={itinerary.title} key={itinerary.title}>
                {itinerary.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted" key={itinerary._id}>
                {itinerary.rating} likes {itinerary.duration} hours{" "}
                {price(itinerary)}
              </Card.Subtitle>
              {authenticated && <LikeButton props={itinerary} />}
              <Card.Text>
                {itinerary.tag.map((hash, i) => (
                  <span key={i}>{hash}</span>
                ))}
              </Card.Text>
            </div>
          </Card.Body>
          <div className="container-activities">
            <div>
              {/* If expand is false, the button says "View all", else the button says "back" */}
              {this.state.expand ? (
                <Button
                  style={style.buttonStyle}
                  variant="info"
                  onClick={() => this.setState({ expand: !this.state.expand })}
                >
                  Back
                </Button>
              ) : (
                <Button
                  style={style.buttonStyle}
                  variant="info"
                  onClick={() => this.setState({ expand: !this.state.expand })}
                >
                  View all
                </Button>
              )}
            </div>
            <div className="container-activ-expand">
              {/* The same way we passed one itinerary as props from the Itineraries component to the Itinerary component
  we're now passing the activities as props to the Activities component for that I can refer to one itinerary
  and specify that I'm only passing the activities "activities={itinerary.activities}". */}
              {expand && <Activities activities={itinerary.activities} />}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("Itinerary component state", state);
  return {
    itineraries: state.itineraries,
    authenticated: state.user.authenticated
  };
};

export default connect(mapStateToProps)(Itinerary);
