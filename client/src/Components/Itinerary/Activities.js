import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchItineraries } from "../../store/actions/itineraryActions";
// import Activity from "./Activity";
// import Itinerary from "./Itinerary";

export class Activities extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      activities: []
    };
  }

  componentDidMount() {
    console.log(this.props.itineraries.itineraries);
    const { itineraries } = this.props.itineraries;
    console.log(itineraries);
    this.setState({
      activities: itineraries.map(itinerary => {
        return itinerary.activities;
      })
    });
  }

  render() {
    console.log(this.state);
    const { activities } = this.state;
    console.log(activities);
    return (
      <div>
        {activities.map((activity, i) => {
          return activity.map((spot, i) => {
            return <h1>{spot.title}</h1>;
          });
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    itineraries: state.itineraries
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchItineraries: cityname => dispatch(fetchItineraries(cityname))
// });

export default connect(mapStateToProps /*, mapDispatchToProps*/)(Activities);
