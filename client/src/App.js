import React from "react";
import "./App.css";
//import Landing from "./Components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Landingv2 from "./Components/Landing/Landingv2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cities from "./Components/Cities/Cities.js";
import SignUp from "./Components/User/SignUp.js";
import LogIn from "./Components/User/LogIn.js";
import Itineraries from "./Components/Itinerary/Itineraries";
import MyAccount from "./Components/User/MyAccount";

function App() {
  const style = {
    bodyStyle: {
      margin: "0px",
      padding: "0px"
    }
  };
  return (
    <BrowserRouter>
      <Col style={style.bodyStyle} xs={12} sm={12}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landingv2} />{" "}
            <Route path="/cities" component={Cities} />{" "}
            <Route path="/signup" component={SignUp} />{" "}
            <Route path="/login" component={LogIn} />{" "}
            <Route path="/itinerary/:cityname" component={Itineraries} />{" "}
            <Route path="/myaccount" component={MyAccount} />
          </Switch>{" "}
        </div>{" "}
      </Col>{" "}
    </BrowserRouter>
  );
}

export default App;
