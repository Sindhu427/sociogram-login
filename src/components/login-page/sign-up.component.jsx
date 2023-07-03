import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const func = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        toast.success("User Created Sucessfully!");
      })
      .catch((err) => {
        toast.error("Error while Creating user");
      });
  };

  return (
    <>
      <form onSubmit={func} className="sign-up-form">
        <h2 className="title">Sign up</h2>
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
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={changeEmail}
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

        <input type="submit" className="btn" value="Sign up" />
        <p className="social-text">Or Sign up with social platforms</p>
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
    </>
  );
};

export default SignUp;
