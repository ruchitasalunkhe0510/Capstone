import React from "react";
import { Link } from "react-router-dom";
import "./Workout.css";
function Workout() {
  return (
    <div>
      <div className="workout">
        <h3 className="workout4">STEP INTO GREATNESS</h3>
        <p className="workout3">
          Find out exactly what diet and training is best for you
        </p>
        <h5 className="workout5">Select Your Gender?</h5>

        <Link to={"/male"}>
          <button className="workout1">Male</button>
        </Link>
        <Link to={"/female"}>
          <button className="workout2">Female</button>
        </Link>
      </div>
    </div>
  );
}

export default Workout;
