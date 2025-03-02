
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from '../css/Auth.css';
import Button from '../Button'; 

const SignUp = () => {
  
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Email:", email);
    
  };

  return (
    <div className="auth-container">
      {/* Left Image Section */}
      

      {/* Right Form Section */}
      <div className="auth-form-container">
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back
        </button>

        <div className="logoo"style={{marginLeft:'10px'}}>
          <img src='./imgs/loginlogo.png' alt="Logo" />
        </div>

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-field">
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>

          <Button type='submit'  className="btn" text="Continue"/>
        </form>

        <div className="links">
         
          <Link to="/ResetPassword">  You forgot your password?Reset Password</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;