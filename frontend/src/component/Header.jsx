import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MailIcon from "@mui/icons-material/Mail";
const Header = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [showBox, setShowBox] = useState(false);
  const location = useLocation();
  const isAuthorized = localStorage.getItem("token");
  let user = "";
  if (isAuthorized) user = localStorage.getItem("crypto_email");

  window.addEventListener('click', function(e){   
    
    if(e.target === document.getElementsByClassName("account_icon")[0])
    {
      showBox ? setShowBox(false) : setShowBox(true);
    }
    else if (showBox && e.target !== document.getElementById("clickBox")){
      setShowBox(false);
    }
  });

  const logout = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("token", "");
      localStorage.setItem("crypto_email", "");
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

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
        setActiveLink(7);
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
            <li>
              <AccountBoxIcon
                onClick={(e) =>
                  e.preventDefault()
                }
                className="account_icon"
              />
            </li>
          </ul>
        </div>
        <div id="mobile">
          {/* <a href=""><span class="material-symbols-outlined">shopping_bag</span></a>
          <i id="bar" class="fa-solid fa-bars" ></i> */}
        </div>
      </section>
      {showBox && (
        <div className="hover-box">
          {isAuthorized ? (
            <div>
              <div className="btn">Logged In</div>
              <div className="btn">
                <MailIcon className="btn-mail-icon" />
                {user}
              </div>
              <button type="button" className="white_btn btn" onClick={logout}>
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <button
                type="button"
                className="white_btn btn"
                onClick={() => {
                  window.location = "/login";
                }}
              >
                Login
              </button>
              <br />
              <button
                type="button"
                className="white_btn btn"
                onClick={() => {
                  window.location = "/signup";
                }}
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;