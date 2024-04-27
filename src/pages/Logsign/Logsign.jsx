import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Logsign.css";

function Logsign() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password.length <= 8 || password.length >= 20) {
      setErrorMessage("Minimum 8 characters");
    } else {
      setErrorMessage("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div class="login-page">
      <div class="form">
        <form class="login-form " target="_blank">
          <h2>SIGN IN TO YOUR ACCOUNT</h2>
          <input
            type="text"
            required
            placeholder="Username"
            id="user"
            autocomplete="off"
          />
          <input
            onInput={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            id="pass"
            autocomplete="off"
          />
          <span id="vaild-pass">{errorMessage}</span>
          <Link to="/">
            <button type="submit" onClick={handleSubmit}>
              SIGN IN
            </button>
          </Link>
          <p class="message">
            <a href="#">Forgot your password?</a>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <Link to="/Signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Logsign;
