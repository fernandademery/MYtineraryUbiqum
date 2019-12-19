import React, { Component } from "react";
import CityList from "./CityList.js";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      cityFilter: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/cities/all")
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          cities: result,
          filtered: Array.from(result)
        });
      })
      .catch(e => console.log(e));
  }

  handleChange(e) {
    this.setState({ cityFilter: e.target.value });
  }

  render() {
    console.log(this.state.cities);
    const filteredCities = this.state.cities.filter(city => {
      console.log(city.name);
      const citylc = city.name.toLowerCase();
      const filter = this.state.cityFilter;
      return citylc.includes(filter);
    });
    return (
      <div>
        <h1>Cities</h1>
        <form>
          <input
            type="search"
            placeholder="Filter by city..."
            onKeyUp={this.handleChange}
            onSubmit="return false"
          />
        </form>

        <div>
          <CityList cities={filteredCities} />
        </div>
      </div>
    );
  }
}

export default Cities;
