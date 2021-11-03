import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h1>User Registration</h1>
          <label>FirstName :</label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="FirstName..."
          />
          <br />
          <label>LastName :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="LastName..."
          />
          <br />
          <label>Password :</label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password..."
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
