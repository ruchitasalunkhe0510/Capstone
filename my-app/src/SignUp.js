import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  namehandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  emailhandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  mobilehandler = (event) => {
    this.setState({
      mobile: event.target.value,
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
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
    event.preventDefault();
  };
  render() {
    return (
      <div className="login">
        <Link to="/">
        <img
          className="login_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i8ilFf2usonsLDFkbFQqXTuYq--BVkdn1Q&usqp=CAU"
          alt="logo"
        />
        </Link>
        <form onSubmit={this.handleSubmit}>
          <h1>Login Page</h1>
          <label>Name :</label>{" "}
          <input
            className="login1"
            type="text"
            value={this.state.name}
            onChange={this.namehandler}
            placeholder="name..."
          />
          <br />
          <label>Email-id :</label>{" "}
          <input
            className="login1"
            type="text"
            value={this.state.email}
            onChange={this.emailhandler}
            placeholder="email..."
          />
          <br />
          <label>Mobile No :</label>{" "}
          <input
            className="login1"
            type="text"
            value={this.state.mobile}
            onChange={this.mobilehandler}
            placeholder="Mobile No..."
          />
          <br />
          <label>Password :</label>{" "}
          <input
            className="login2"
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password..."
          />
          <br />
          <input className="login3" type="submit" value="Submit" />
        </form>
        <div className="login_btn">
          <Link to="/login">
            <button className="btn">Already have an Account?</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
