import React from "react";
import "./App.css";
//import Landing from "./Components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Landingv2 from "./Components/Landingv2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cities from "./Components/Cities.js";
import SignUp from "./Components/SignUp.js";
import LogIn from "./Components/LogIn.js";

function App() {
  const style = {
    bodyStyle: {
      margin: 0
    }
  };
  return (
    <BrowserRouter>
      <Col style={style.bodyStyle} xs={12} sm={12}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landingv2} />
            <Route path="/cities" component={Cities} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </Switch>
        </div>
      </Col>
    </BrowserRouter>
  );
}

export default App;
