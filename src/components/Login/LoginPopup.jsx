import "./LoginPopup.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPopup = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleOrderNow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/SignUp");
  };

  return (
    <div className='LoginPopup flex justify-center items-center'>
      <div className="login-container">
        <h2 className="login-title MainHeading">Log in</h2>
        <div className="login-box">
          <form>
            <div className='email'>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email" required />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Your Password" required />
            </div>

            {/* Options (Checkbox + Forgot Password) */}
            <div className="options flex items-center justify-between">
              <label className="options1 flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Remember&nbsp;Me</span>
              </label>
              <a href="#" className="options2 text-sm text-orange-600 font-bold">Forgot Password</a>
            </div>

            <button type="submit" className="login-btn">Log In</button>

            <p className="signup-text">
              Don't have an account? <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOrderNow();
                }}>Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
