import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import API from "../config/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
  e.preventDefault();
  try{
  if (!email) {
  alert("Email is required");
  return;
  }
  if (!password) {
  alert("Password is required");
  return;
  }
  const res = await axios.post("${API}/login", 
    {
      email,
      password,
    },
    { withCredentials: true }
);
  window.location.href = "${API}/";
  console.log('login successful');
  alert("Login successful!");
  } catch (err) {
    console.error(err);
    alert("somethign went wrong");
  }
}


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
