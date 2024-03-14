import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom'

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);

  const handleActiveClass = (id) => {
    document.getElementById(activeLink).classList.remove("active");
    setActiveLink(id);
    document.getElementById(id).classList.add("active");
  };

  return (
    <>
      <section id="header">
        <div className='logo'>
          <Link to="/">
            <h1>Crypto <span>App</span></h1>
          </Link>
        </div>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/" className="active" onClick={() => handleActiveClass(1) } id ="1">Home</Link>
            </li>
            <li>
              <Link to="/exchanges"  onClick={() => handleActiveClass(2)} id ="2">Exchanges</Link>
            </li>
            <li>
              <Link to="/coins"  onClick={() => handleActiveClass(3)} id ="3">Coins</Link>
            </li>
            <li>
              <Link to="/about"  onClick={() => handleActiveClass(4)} id ="4">About</Link>
            </li>
            <li>
              <Link to="/Contact"  onClick={() => handleActiveClass(5)} id ="5">Contact</Link>
            </li>
            <li>
              <Link to="/chat" onClick={() => handleActiveClass(6)} id ="6">
                <span className="material-symbols-outlined">chat</span>
              </Link>
            </li>
          </ul>
        </div>
        <div id="mobile">
          {/* <a href=""><span class="material-symbols-outlined">shopping_bag</span></a>
          <i id="bar" class="fa-solid fa-bars" ></i> */}
        </div>
      </section>
    </>
  );
}

export default Header;