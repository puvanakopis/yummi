import "./SignUp.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPopup = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/LoginPopup");
  };

  return (
    <div className="LoginPopup flex justify-center items-center">
      <div className="login-container">
        <h2 className="login-title MainHeading">Sign Up</h2>
        <div className="login-box">
          <form>
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email">Phone Number</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className="password">
              <label htmlFor="password">Rewrite Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password Again"
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Log In
            </button>

            <p className="signup-text">
              Already have an account?
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOrderNow();
                }}>
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
