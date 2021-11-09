import React from "react";
import "./App.css";
import Info from "./Info";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Display from "./Display";
import Diet from "./Diet";
import DietPlan from "./DietPlan";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <div className="App_file"> */}
      <Router>
        <Home />
        <Switch>
          <Route exact path="/dietplan">
            <DietPlan />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Display />
          </Route>

          <Route path="/diet">
            <DietPlan />
            <Diet />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
