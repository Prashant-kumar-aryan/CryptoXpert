import React from 'react';
import logo from "./images/logo/walogo.png";
import "./whatsapp.css";

const Whatsapp = () => {
  return (
    <a href="https://wa.me/7250412245" target='blank'>
      <div className="whatsapp-container">
        <img src={logo} alt="whatsapp" className='whatsapp' height="100vh"/>
        <div className="whatsapp-text">Customer Support<p>click to chat</p></div>
      </div>
    </a>
  );
};

export default Whatsapp;
