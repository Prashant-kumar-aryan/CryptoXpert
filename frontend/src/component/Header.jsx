import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import logo from './logo.jpg';

const Header = () => {
  return (
    <>
            <section id="header">
            <div className='logo'><Link to="/"><h1>Crypto <span>App</span></h1></Link></div>
            <div>
                <ul id="navbar">
                    <i id="close" class="fa-solid fa-bars" ></i>
                    <li><Link to="/" className="active" >Home</Link></li>
                    <li><Link to="/exchanges">Exchanges</Link></li>
                    <li><Link to="/coins">Coins</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/chat"><span class="material-symbols-outlined">
            chat
       </span></Link></li>
                </ul>
            </div>
            <div id="mobile">
                {/* <a href=""><span class="material-symbols-outlined">shopping_bag</span></a>
                <i id="bar" class="fa-solid fa-bars" ></i> */}
            </div>
        </section>
    </>
  )
}

export default Header
