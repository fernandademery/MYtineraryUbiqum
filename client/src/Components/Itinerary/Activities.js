import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Activity from "./Activity";

// this ({activities}) is receiving the activities that I sent from Itinerary component as props.
export default function Activities({ activities }) {
  const style = {
    h2Style: {
      textAlign: "left",
      marginTop: "10px",
      marginLeft: "10px"
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <h2 style={style.h2Style}>Activities:</h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
      >
        {activities.map((activity, i) => {
          return <Activity activity={activity} />;
        })}
      </Carousel>
    </div>
  );
}
