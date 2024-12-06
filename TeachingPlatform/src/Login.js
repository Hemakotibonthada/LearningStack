import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);  // State to show the loader
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);  // Start loading animation

      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });

      localStorage.setItem("username", username);
      alert(response.data.message);

      onLogin();

      setTimeout(() => {
        setIsLoading(false);  // Stop loader after 1 second
        navigate("/");
      }, 1000);

    } catch (err) {
      console.error("Login Error:", err.response?.data);
      alert(err.response?.data?.message || "Invalid credentials");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

        {isLoading && (
          <div className="loading">
            {Array(30)
              .fill("")
              .map((_, i) => (
                <div key={i} style={{ "--index": i }}></div>
              ))}
          </div>
        )}

        <p>
          Don't have an account? <span onClick={() => navigate("/signup")}>Signup</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
