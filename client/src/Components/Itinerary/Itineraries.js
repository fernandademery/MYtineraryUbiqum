import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../../store/actions/itineraryActions";

export class Itineraries extends Component {
  componentDidMount() {
    console.log(this.props);
    const { cityname } = this.props.match.params;
    this.props.fetchItineraries(cityname);
  }
  render() {
    console.log(this.props);
    const { itineraries } = this.props.itineraries;

    return (
      <div>
        {itineraries &&
          itineraries.map((title, _id) => {
            return (
              <h1 title={itineraries.title} key={_id}>
                {itineraries.author}
              </h1>
            );
          })}
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

const mapDispatchToProps = dispatch => ({
  fetchItineraries: cityname => dispatch(fetchItineraries(cityname))
});

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);
