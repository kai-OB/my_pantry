// import logo from "./logo.svg";
import "./style/SignUp.css";
// import { withRouter } from "react-router-dom";

function SignUp() {
  return (
    <div className="screen">
      <div className="App">
        <button className="pantry-button" type="button">
          <h1 className="pantry-title">Sign Up</h1>
        </button>
        <div className="login-signup-flex">
          <button className="setup-button">Login</button>
          {/* <img className="line" src="line.jpg" alt="line"></img> */}
          <button className="setup-button">Sign-up</button>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="email-password-flex">
        <p className="email-text">Email Address</p>
        <input className="input" type="text" placeholder="Email"></input>
        <p className="username-text">Username</p>
        <input
          className="input"
          type="text"
          placeholder="Username"
        ></input>
         <p className="password-text">Password</p>
        <input
          className="input"
          type="text"
          placeholder="Password"
        ></input>
         <p className="confirm-password-text">Confirm Password</p>
        <input
          className="input"
          type="text"
          placeholder="Confirm Password"
        ></input>
      </div>
      <br></br>
      <div className="login">
        <button className="login-button">Sign-up</button>
      </div>
    </div>
  );
}

export default SignUp;
