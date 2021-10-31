import React from "react";
import "./User_Info.css";

function User_Information() {
  return (
    <div className="user_info">
      <div className="info-design">
        <div className="inner-text">
          <h2>User Detail</h2>
        </div>
      </div>
      <div className="geting_form">
        <from>
          <h5>FirstName</h5>
          <input type="text" placeholder="FirstName" />
          <h5>lastName</h5>
          <input type="text" placeholder="LastName" />
          <h5>Gender</h5>
          <input type="text" placeholder="Gender" />
          <h5>age</h5>
          <input type="number" />
          <h5>Height</h5>
          <input type="number" />
          <h5>Weight</h5>
          <input type="number" />
          <h5>State</h5>
          <input type="text" placeholder="State" />
          <h5>City</h5>
          <input type="text" placeholder="City" />
          <h5>Medical Issue</h5>
          <input type="text" />
          <button className="submit-btn">Submit</button>
        </from>
      </div>
    </div>
  );
}

export default User_Information;
