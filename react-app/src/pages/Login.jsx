import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userInfo = {
      email: email,
      password: password,
    };

    console.log(userInfo);

    try {
      const response = await axios.post("https://reqres.in/api/login", userInfo)
      console.log("Login Successfull!");

      // Storing the token in session storage
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      console.log("Stored the token in session storage");

      navigate("/users")

    }catch (error){
      console.log("Error: ", error)
      alert("Login Failed!")
    }
  }

  return (
    <div className="container">
        
      <div className="hero-container">
          <div className="login-container">
            <div className="icon"></div>
            
            <div className="login">
              <div className="signin-container">
                <div className="signin">Sign in</div>

                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event)=>{setEmail(event.target.value)}} 
                    required />
                  
                  <label htmlFor="password">Your Password</label>
                  <input 
                    type="password" 
                    id="password"
                    name="password"
                    value={password}
                    onChange={(event)=>{setPassword(event.target.value)}} 
                    required />

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
