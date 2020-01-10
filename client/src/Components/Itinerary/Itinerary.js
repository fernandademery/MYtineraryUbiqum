import React from "react";
import { Card } from "react-bootstrap";
import StarRating from "react-bootstrap-star-rating";
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
      borderRadius: "50%"
    }
  };

  return (
    <div style={style.itineraryStyle}>
      <Card className="flex-container">
        <div>
          <img style={style.imgStyle} src={itinerary.img} alt="Profile" />
          <h4>{itinerary.author}</h4>
        </div>
        <Card.Body>
          <Card.Title title={itinerary.title} key={itinerary.title}>
            {itinerary.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" key={itinerary._id}>
            {itinerary.rating} likes {itinerary.duration} hours{" "}
            <StarRating
              style={style.ratingStyle}
              defaultValue={itinerary.price}
              readonly={true}
            />
          </Card.Subtitle>
          <Card.Text>{itinerary.tag}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
