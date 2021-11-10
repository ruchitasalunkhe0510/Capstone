import React from "react";
import "./Diet.css";
import AutorenewIcon from "@material-ui/icons/Autorenew";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
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
        <small className="check">
          <input type="checkbox" /> I ate this
        </small>
        {/* <button>
          <CheckBoxIcon /> I ate this
        </button> */}
        <AutorenewIcon />
        <BlurCircularIcon />
        <span>2 Ingredient Protein Pancakes</span>
        <img
          src="https://images.eatthismuch.com/site_media/thmb/412920_HillOK444_2d2221c9-dcb5-4249-827a-a413eae547e5.png"
          alt="breakfast_image"
        />
        <select>
          <option value="gram">gram</option>
          <option value="serving">serving</option>
        </select>
      </div>
      <div className="lunch">
        <h4>Lunch</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Raw Broccoli Salad</h5>
        <select>
          <option value="gram">gram</option>
          <option value="serving">serving</option>
        </select>
      </div>
      <div className="dinner">
        <h4>Dinner</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Spicy Buttered Corn</h5>
        <select>
          <option value="gram">gram</option>
          <option value="serving">serving</option>
        </select>
      </div>
      <div className="snack">
        <h4>Snack</h4>
        <AutorenewIcon />
        <BlurCircularIcon />
        <img src="" alt="" />
        <h5>Apple</h5>
        <select>
          <option value="gram">gram</option>
          <option value="serving">serving</option>
        </select>
      </div>
    </div>
  );
}

export default Diet;
