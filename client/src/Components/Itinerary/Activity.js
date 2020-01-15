import React from "react";
import "../../App.css";
import Button from "react-bootstrap/Button";

export default function Activity({ activity }) {
  const style = {
    containerStyle: {
      marginBottom: "20px"
    }
  };
  return (
    <div style={style.containerStyle}>
      <img
        className="img-activity"
        src={activity.img[0]}
        alt={activity.title}
      />
      <h3>{activity.title}</h3>
      <p className="activity-desc">{activity.description}</p>
      <a href={activity.link} target="_blank" rel="noopener noreferrer">
        <Button className="site-button" size="lg">
          View website
        </Button>
      </a>
    </div>
  );
}
