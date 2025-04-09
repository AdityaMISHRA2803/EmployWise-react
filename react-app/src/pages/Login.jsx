import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
        
      <div className="hero-container">
          <div className="login-container">
            <div className="icon"></div>
            
            <div className="login">
              <div className="signin-container">
                <div className="signin">Sign in</div>

                <form>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" required />
                  
                  <label htmlFor="password">Your Password</label>
                  <input type="password" id="password" required />

                  <button type="submit">Log In</button>

                </form>
                <div className="terms">By continuing, you agree to the <span>Terms of Use </span> 
                and <span>Privacy Policy.</span></div>

              </div>
            </div>

            <div className="line"></div>
          </div>
      </div>

      <div className="footer-container">
        <div className="footer-items">
          <div className="item1">Help Center</div>
          <div className="item2">Terms Of Service</div>
          <div className="item3">Privacy Policy</div>
          <div className="item4">@2025EmployWise</div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
