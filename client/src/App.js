import React, { useEffect, useState } from "react";
import axios from "axios";
import { Login } from "./Components/Login/Login.jsx";
import { Signup } from "./Components/Login/Signup.jsx";
import { Sale } from "./Components/Sale/Sale.jsx";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Sale />
      <p>{message}</p>
    </div>
  );
}

export default App;