import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/coins">Coins</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
    </nav>
  )
}

export default Header
