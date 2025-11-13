import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css"; // Import CSS Module
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    axios
      .post("http://127.0.0.1:5000/api/signup", { username, password, password2 })
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        if (err.response) setMessage(err.response.data.message);
        else setMessage("Error connecting to server.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>New Account</div>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="User ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Re-enter Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.submitContainer}>
        <div className={styles.submit} onClick={handleSignup}>
          Create New Account
        </div>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};