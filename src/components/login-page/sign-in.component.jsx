import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ForgetPassword from "../forgetPassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const func = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: username,
        password,
      })
      .then((response) => {
        toast.success("Login  successful!");
        navigate("/HomePage");
      })
      .catch((err) => {
        toast.error("Invalid  username or password!");
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={func} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={changeUsername}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
            required
          />
        </div>

        <input type="submit" value="Login" className="btn solid" />
        <p
          style={{
            cursor: "pointer",
            fontSize: "12px",
          }}
          onClick={ForgetPassword}
        >
          <u>Forgot Password</u>
        </p>
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <button className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-google"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </form>
      <ToastContainer />
      {/* <ForgetPassword /> */}
    </>
  );
};

export default SignIn;
