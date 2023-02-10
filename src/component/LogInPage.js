import React, { useState } from "react";
import './Login.css';

const LogInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
     // Login action
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // register action
    
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange} />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange} />
        </div>

        <button type="submit" onClick={handleLogin}> Login </button> 
        <button type="submit" onClick={handleRegister}> Register </button>
      </form>
    </div>
  );
};

export default LogInPage;