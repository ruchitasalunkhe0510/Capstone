import React, { useState } from "react";
import "./Diet.css";
import Breakfast from "./Breakfast";
import AutorenewIcon from "@material-ui/icons/Autorenew";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
import BlurCircularIcon from "@material-ui/icons/BlurCircular";

function Diets() {
  const [data, setdata] = useState(0);

  console.log(Breakfast);
  function handlesubmit() {
    // const item = e.target.value;
    // console.log(item);
    // setdata({});
  }
  const listItems = Breakfast.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card_img">
          <img src={item.img} alt="brakfast_image" />
        </div>
        <div className="card_header">
          <p>{item.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="diet">
      <div className="diet_title">
        <h2>Meal Planner</h2>
      </div>
      <div className="breakfast">
        <h4>Breakfast</h4>
        <div className="breakfast1">
          <small className="check">
            <input type="checkbox" /> I ate this
          </small>
          {/* <button>
            <CheckBoxIcon /> I ate this
          </button> */}
          <button onClick={() => handlesubmit()}>
            <AutorenewIcon />
          </button>
          <BlurCircularIcon />
          {/* {listItems} */}
        </div>
        <div>{listItems}</div>
        {/* // <div className="breakfast2">{" "} */}
        {/* <div>
          {data.map((item) => {
            
             return{
               <div>
              <img src={item.img} alt="breakfast_images" />
              <p>{item.title}</p>
              </div>
             };
          })}
        </div> */}

        {/* </div> */}
        {/* <div>
          {item.map((item) => (
            <li>{item.image}</li>
            // <li>{item.name}</li>
          ))}
        </div> */}
        <div className="breakfast3">
          <select>
            <option value="gram">gram</option>
            <option value="serving">serving</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Diets;
