import React from "react";
import "./Diet.css";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
function Diet() {
  return (
    <div className="diet">
      <div className="diet_title">
        <h2>Meal Planner</h2>
      </div>
      <div className="breakfast">
        <h4>Breakfast</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>2 Ingredient Protein Pancakes</h5>
        {/* <select />
        <option defaultValue>Select </option>
        <option>gram</option>
        <option>serving</option>
        <select /> */}
      </div>
      <div className="lunch">
        <h4>Lunch</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Raw Broccoli Salad</h5>
        <select />
        <option>Select </option>
        <option>gram</option>
        <option>serving</option>

        {/* <select /> */}
      </div>
      <div className="dinner">
        <h4>Dinner</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Spicy Buttered Corn</h5>
      </div>
      <div className="snack">
        <h4>Snack</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Apple</h5>
      </div>
    </div>
  );
}

export default Diet;
