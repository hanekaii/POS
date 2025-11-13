import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css"; // using CSS module
import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    axios
      .post("http://127.0.0.1:5000/api/login", { username, password })
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        if (err.response) setMessage(err.response.data.message);
        else setMessage("Error connecting to server.");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Login</div>
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
      </div>

      <div className={styles.submitContainer}>
        <div className={styles.submit} onClick={handleLogin}>
          Login
        </div>
      </div>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};