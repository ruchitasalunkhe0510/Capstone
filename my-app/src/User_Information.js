import React, { useState } from "react";
import "./User_Info.css";

const User_Information = () => {
  const [FirstName, setFirstName] = useState(" ");
  return (
    <div className="user_info">
      <div className="info-design">
        <div className="inner-text">
          <h2>User Detail</h2>
        </div>
      </div>
      <div className="geting_form">
        <form>
          <h5>FirstName:</h5>
          <input
            type="text"
            placeholder="FirstName"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <h5>lastName</h5>
          <input type="text" placeholder="LastName" />
          {/* <h5>Gender</h5>
          <input type="text" placeholder="Gender" /> */}
          <h5>Gender :</h5>
          <select defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
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
          <p className="btn">
            <button className="submit-btn">Submit</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default User_Information;
