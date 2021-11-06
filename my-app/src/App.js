import React from "react";
import "./App.css";
import Info from "./Info";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Display from "./Display"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Display/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
