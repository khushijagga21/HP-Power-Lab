import React from 'react';
import './SignupOptions.css'; 

const SignupOptions = () => {
  return (
    <div className="signup-container">
      <h2 className="title">Choose Your Signup Path</h2>
      <div className="button-container">
        <button className="hp-button">Signup as Farmer Account Manager</button>
        <button className="hp-button">Signup as Fuel Driver</button>
        <button className="hp-button">Signup as Management</button>

      </div>
    </div>
  );
};

export default SignupOptions;