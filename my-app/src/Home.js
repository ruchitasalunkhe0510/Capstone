import React from "react";
import "./Home.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
// import Diet from "./Diet";
function Home() {
  return (
    <div className="home">
      <Link to="/">
        <img
          className="home_first"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i8ilFf2usonsLDFkbFQqXTuYq--BVkdn1Q&usqp=CAU"
          alt="logo"
        />
      </Link>
      {/* <div className="home_first1">
        <span
          style={{
            fontSize: "20px",
            color: "white",
            fontStyle: "italic",
          }}
        >
          Healthy Diet
        </span>
      </div> */}
      {/* <Link to={"/main"}> */}
      <div className="home_second">
        <span>Home</span>
      </div>
      {/* </Link> */}
      <div className="home_third">
        <span>About us</span>
      </div>
      <Link to={"/dietplan"}>
        <div className="home_forth">
          <span>Diet Plan</span>
          <ExpandMoreIcon />
        </div>
      </Link>
      <Link to={"/workout"}>
        <div className="home_five">
          <span>Exercise Plan</span>
          <ExpandMoreIcon />
        </div>
      </Link>
      <Link to={"/login"}>
        <div className="home_six">
          <button>Login</button>
        </div>
      </Link>
      <div className="home_six1">
        <span>Help</span>
        <HelpIcon />
      </div>
    </div>
  );
}

export default Home;
