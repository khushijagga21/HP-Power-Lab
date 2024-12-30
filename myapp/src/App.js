import React from 'react';
import Navbar from './components/Navbar';
import LoginBox from './components/LoginBox';
import Footer from './components/Footer';
import Signup from './components/Signup';
import SignupOptions from './components/SignupOptions';
import Usage from './components/Usage';

import './App.css';
import Ordering from './components/Ordering';


const App = () => {
  return (
    <>
      <Navbar />
  
      <LoginBox />
      

      <Footer />
      <Signup/>
      <SignupOptions/>
      <Ordering/>
      <Usage/>
      
    </>
  );
};

export default App;
