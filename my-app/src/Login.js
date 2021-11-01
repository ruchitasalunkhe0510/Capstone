import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import "./Login.css";
// import Logout from './Logout';
//import { Link } from 'react-router-dom';
// import Signup from './Signup';
// import { login } from "../features/userSlice";
// import { Link } from "react-router-dom";
// import Logout from './Logout';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const dispatch = useDispatch();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       login({
  //         name: name,
  //         email: email,
  //         password: password,
  //         loggedIn: true,
  //       })
  //     );
  //   };
  return (
    <div className="login">
      <img
        className="login_logo"
        src="data:image/png;base64,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"
        alt="logo"
      />
      <div className="login_container">
        <h1>Create account</h1>
        <from>
          <h5>Your Name</h5>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Link to="/Logout"> */}
          <button type="submit" className="submit_btn">
            Sign up
          </button>
          {/* </Link> */}
          {/* <button type='Login' onClick={Signup} className='submit_btn'>Create your IMDb account</button> */}
        </from>
        <div className="sign_in">
          {/* <Link to="/Signup"> */}

          <button className="sign-in">already have an account?</button>
          {/* onClick={Logout} */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
