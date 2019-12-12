import React from "react";
import Button from "../circled-right-2.png";

export default function BrowsingButton() {
  const style = {
    buttonStyle: {
      backgroundColor: "white",
      cursor: "pointer",
      border: "none"
    }
  };
  return (
    <div marginTop="0">
      <button style={style.buttonStyle}>
        <img src={Button} alt="start browsing" width="80px" />
      </button>
    </div>
  );
}
