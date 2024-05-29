import React from "react";
import "./Login.css";
export const Login = () => {
  return (
    <div className="divlogin-container">
      <div class="login-container">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="container">
        <div class="log-card">
          <p class="heading">Welcome Back</p>
          <p>We are you to have you Again</p>

          <div class="input-group">
            <p class="text">Username</p>
            <input
              class="input"
              type="username"
              placeholder="For Ex: Jayakrishna007"
            />
            <p class="text">Password</p>
            <input class="input" type="password" placeholder="Enter Password" />
          </div>

          <div class="password-group">
            <div class="checkbox-group">
              <input type="checkbox" />
              <label class="label">Remember Me</label>
            </div>
            <a href="" class="forget-password">
              Forget Password
            </a>
          </div>

          <button class="btn">Sign In</button>

          <p class="no-account">
            Don't Have an Account ?<a class="link"> Sign Up</a>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};
