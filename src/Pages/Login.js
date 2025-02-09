import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of router.back()
import Button from '../Button'; 

function FullPageForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email and password are filled
    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Remember Me:", rememberMe);
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <div className="auth-container">
     
      {/* Form Section */}
      <div className="auth-form-container">
     
        {/* Back Button */}
        <button onClick={handleBackClick} className="back-btn">
          ← Back
        </button>

        {/* Logo */}
        <div className="logoo" >
          <img src='./imgs/loginlogo.png' alt="Logo" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="form-field">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember </label>
          </div>

          {/* Forgot Password Link (inside the form) */}
          <div className="forgot-password-link">
            <p>
              <a href="/forgot-password">Forgot Password?</a>
            </p>
          </div>
          <Button type='submit'  className="btn" text="Sign in"/>
          {/* Sign In Button */}
          
        </form>

        {/* Sign Up Link */}
        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FullPageForm;
