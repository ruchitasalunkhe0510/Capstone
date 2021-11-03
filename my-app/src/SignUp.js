import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
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
      email: "",
      password: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="login">
        <img
          className="logo_design"
          src="data:image/png;base64,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"
          alt="logo"
        />
        <form onSubmit={this.handleSubmit}>
          <h1>Sign-Up</h1>
          <label>Email-id :</label>{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={this.emailhandler}
            placeholder="email..."
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
