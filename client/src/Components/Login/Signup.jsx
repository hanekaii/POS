import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    axios
      .post("http://127.0.0.1:5000/api/signup", { username, password, password2})
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Error connecting to server.");
        }
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">New Account</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="User ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Re-enter Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>
          Create New Account
        </div>
      </div>

      {message && <p className="message">{message}</p>}
    </div>
  );
};