// import logo from "./logo.svg";
import "./style/Home.css";
// import { Redirect } from "react-router";
// import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

function Home(props) {
  // let history = useHistory();
  // const navigateTo = () => history.push("/SignUp.js");
  return (
    <div className="screen">
      <div className="App">
        <button className="pantry-button" type="button">
          <h1 className="pantry-title">Home</h1>
        </button>
        <div className="login-signup-flex">
          <button className="setup-button">Login</button>
          <button class="signup-button">
          <Link to="/SignUp" class="signup-link">Sign-Up</Link>
         </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="email-password-flex">
        <p className="email-text">Email Address</p>
        <input className="email-input" type="text" placeholder="Email"></input>
        <p className="password-text">Password</p>
        <input
          className="password-input"
          type="text"
          placeholder="Password"
        ></input>
      </div>
      <br></br>
      <div className="forgotpassword-div">
        <button className="forgotpassword-button">Forgot Password?</button>
      </div>
      <div className="login">
        <button className="login-button">
        <Link to="/Dashboard" class="signup-link">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
