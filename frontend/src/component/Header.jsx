import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case "/":
        setActiveLink(1);
        break;
      case "/exchanges":
        setActiveLink(2);
        break;
      case "/coins":
        setActiveLink(3);
        break;
      case "/about":
        setActiveLink(4);
        break;
      case "/Contact":
        setActiveLink(5);
        break;
      case "/chat":
        setActiveLink(6);
        break;
      default:
        setActiveLink(1);
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <section id="header">
        <div className="logo">
          <Link to="/">
            <h1>
              Crypto <span>App</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul id="navbar">
            <li>
              <Link
                to="/"
                className={activeLink === 1 ? "active" : ""}
                onClick={() => setActiveLink(1)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/exchanges"
                className={activeLink === 2 ? "active" : ""}
                onClick={() => setActiveLink(2)}
              >
                Exchanges
              </Link>
            </li>
            <li>
              <Link
                to="/coins"
                className={activeLink === 3 ? "active" : ""}
                onClick={() => setActiveLink(3)}
              >
                Coins
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={activeLink === 4 ? "active" : ""}
                onClick={() => setActiveLink(4)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={activeLink === 5 ? "active" : ""}
                onClick={() => setActiveLink(5)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/chat"
                className={activeLink === 6 ? "active" : ""}
                onClick={() => setActiveLink(6)}
              >
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
};

export default Header;
