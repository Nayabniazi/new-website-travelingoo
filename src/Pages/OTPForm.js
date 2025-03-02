
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for navigation
import Button from "../Button";

function FullPageForm() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  // Handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp.join("")}`);
  };

  return (
    <div className="auth-container">
      {/* Form Section */}
      <div className="auth-form-container">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="back-btn">
          ← Back
        </button>

        {/* Logo */}
        <div className="logoo">
          <img src="./imgs/loginlogo.png" alt="Logo" />
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>Enter OTP</h2>
          <div className="otp-fields">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                value={digit}
                maxLength="1"
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="otp-input"
              />
            ))}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="btn" text="Verify OTP" />
        </form>

        {/* Resend OTP Link */}
       

        <div className="signup-link">
          <p>
            Don't have an account?{" "}
            <a href="/signup">Sign up</a>
          </p>
        </div>


      </div>

      {/* Styled JSX for scoped styling */}
      <style jsx>{`
        .otp-fields {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        .otp-input {
          width: 50px;
          height: 50px;
          font-size: 20px;
          text-align: center;
          border: 2px solid #4caf50;
          border-radius: 5px;
          outline: none;
        }
        .otp-input:focus {
          border-color: #2e7d32;
        }
        .resend-link {
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default FullPageForm;
