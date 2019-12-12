import React from "react";
import Header from "./Header.js";
import CTACities from "./CTACities.js";

export default function Landing() {
  const style = {
    ctaStyle: {
      alignContent: "center"
    }
  };
  return (
    <div className="body-responsive">
      <Header />
      <CTACities style={style.ctaStyle} />
    </div>
  );
}
