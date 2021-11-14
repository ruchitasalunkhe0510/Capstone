import React, { Component } from "react";
import "./Info.css";
// import Main from "./Main";
import { Link } from "react-router-dom";

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      weight: "",
      ideal: "",
      height: "",
      state: "",
      city: "",
      medicalIssue: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
      weight: "",
      ideal: "",
      height: "",
      state: "",
      city: "",
      medicalIssue: "",
    });
  };

  render() {
    const {
      firstName,
      lastName,
      gender,
      age,
      weight,
      ideal,
      height,
      state,
      city,
      medicalIssue,
    } = this.state;
    return (
      <div className="user_info">
        <div className="info-design">
          <div className="inner-text">
            <h2>User Detail</h2>
          </div>
        </div>
        <div className="geting_form">
          <form>
            {/* <div className="info1"> */}
            <h5>FirstName:</h5>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              placeholder="FirstName"
            />
            <h5>lastName</h5>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              placeholder="LastName"
            />

            <h5>Gender :</h5>
            <select
              name="gender"
              onChange={this.handleChange}
              defaultValue="Select Gender"
              value={gender}
            >
              <option defaultValue>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <h5>age</h5>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
            <h5>Height</h5>
            <input
              type="number"
              name="height"
              value={height}
              onChange={this.handleChange}
            />

            <h5>Weight</h5>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={this.handleChange}
            />
            <h5>Ideal Weight</h5>
            <input
              type="number"
              name="ideal"
              value={ideal}
              onChange={this.handleChange}
            />
            <h5>State</h5>
            <input
              type="text"
              name="state"
              value={state}
              onChange={this.handleChange}
              placeholder="State"
            />
            <h5>City</h5>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.handleChange}
              placeholder="City"
            />
            <h5>Medical-Issue</h5>
            <input
              type="text"
              name="medicalIssue"
              value={medicalIssue}
              onChange={this.handleChange}
            />
            {/* </div> */}

            <p className="btn">
              {/* <Link to="/main"> */}
              <Link to={"/premium"}>
                <button className="submit-btn">
                  {/* onClick={this.handleSubmit}> */}
                  Submit
                </button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Info;
