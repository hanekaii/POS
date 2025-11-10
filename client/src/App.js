import React, { useEffect, useState } from "react";
import axios from "axios";
import { Login } from "./Components/Login/Login";
import { Signup } from "./Components/Login/Signup";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => {
        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Error connecting to server.");
        }
      });
  }, []);

  return (
    <div>
      <Signup />
      <p>{message}</p>
    </div>
  );
}

export default App;