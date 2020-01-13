import React from "react";
import { Card } from "react-bootstrap";
import Rate from "rc-rate";
import "../../App.css";

export default function Itinerary({ itinerary }) {
  const style = {
    itineraryStyle: {
      marginBottom: "10px"
    },
    ratingStyle: {
      display: "inline"
    },
    imgStyle: {
      width: "90px",
      borderRadius: "50%",
      padding: "5px"
    }
  };

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
              <Rate
                style={style.ratingStyle}
                count={1}
                value={itinerary.price}
                character="$"
                onChange="return false"
              />
            </Card.Subtitle>
            <Card.Text>{itinerary.tag}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
