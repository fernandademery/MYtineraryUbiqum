import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../App.css";
import Activities from "./Activities";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

export class Itinerary extends Component /*({ itinerary })*/ {
  constructor() {
    super();
    this.state = {
      activities: [],
      expand: false
    };
  }
  componentDidMount() {
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
              <Card.Text>
                {itinerary.tag.map((hash, i) => (
                  <span key={i}>{hash}</span>
                ))}
              </Card.Text>
            </div>
          </Card.Body>
          <div className="container-activities">
            <div>
              <Button
                style={style.buttonStyle}
                variant="info"
                onClick={() => this.setState({ expand: !this.state.expand })}
              >
                View all
              </Button>
            </div>
            <div className="container-activ-expand">
              {expand && <Activities />}
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    itineraries: state.itineraries
  };
};

export default connect(mapStateToProps)(Itinerary);
