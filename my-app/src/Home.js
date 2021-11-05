import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home_first"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0i8ilFf2usonsLDFkbFQqXTuYq--BVkdn1Q&usqp=CAU"
        alt="logo"
      />
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
      <div className="home_second">
        <button>Home</button>
      </div>
      <div className="home_third">
        <button>About us</button>
      </div>
      <div className="home_forth">
        <button>Diet Plan</button>
      </div>
      <div className="home_five">
        <button>Exercise Plan</button>
      </div>
      <div className="home_six">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Home;
