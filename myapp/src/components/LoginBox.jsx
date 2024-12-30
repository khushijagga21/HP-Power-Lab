import React from 'react';
import './LoginBox.css';

const LoginBox = () => {
  return (
    <div className="login-container">
      <div className="hero">
        <h1>Delivering Happiness...</h1>
        <img
          src="https://sales.hpcl.co.in/bportal/hp_logo.png"
          alt="Hero Image"
        />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label htmlFor="customer-id">Customer ID</label>
          <input type="text" id="customer-id" placeholder="customer id" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" required />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
