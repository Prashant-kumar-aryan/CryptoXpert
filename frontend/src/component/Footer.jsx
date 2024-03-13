import React from 'react'
import "./Footer.css"
import logo from "./images/logo/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const year = new Date().getFullYear();
const Footer = () => {
    return (
        <>
            <footer className="section-p1">
                <div className="col">
                    <img src={logo} className="logo" />
                </div>
                <div className="col">
                    <h4>Contact</h4>
                    <p><strong> Address :</strong> KIIT UNIVERSITY</p>
                    <p><strong> Phone :</strong>+91 72504 12245</p>
                    <p><strong> Hours :</strong> 6:00 pM - 9:00 PM</p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and conditions*</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign in</a>
                    <a href="#">Register</a>
                    <a href="#">Forgot Password</a>
                    <a href="#">Help</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>Available Soon On App and Play Store ✅</p>
                    <div className="row">
                        <img src="" />
                    </div>
                    <div class="col">
                        <h4>About</h4>
                        <a href="#">About Us</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms and conditions*</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div class="col">
                        <h4>My Account</h4>
                        <a href="#">Sign in</a>
                        <a href="#">Register</a>
                        <a href="#">Forgot Password</a>
                        <a href="#">Help</a>
                    </div>
                    <div class="col install">
                        <h4>Install App</h4>
                        <p>Available Soon On App and Play Store ✅</p>
                        <div class="row">
                            <img src="" />
                        </div>
                    </div>
                    <br />
                    {/* </footer> */}
                    <div class="copyright">
                        <p>copyright@:{year} CRYPTO APP - All rights Reserved</p>
                    </div>
                    <br />
                </div>
            </footer>

        </>
    )
}

export default Footer
