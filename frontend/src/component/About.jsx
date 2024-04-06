import React from "react";
import { Link } from "react-router-dom";
import "../component/Styles/About.css";
import img from "./images/About/About1.jpg";
import img1 from "./images/About/Prashant.jpg";
import img2 from "./images/About/Sahil.jpg";
import img3 from "./images/About/Akshat.png";
import img4 from "./images/About/Divyanshi.jpg";
import img5 from "./images/About/Shilpa.jpg";
import Faq from "./Faq";

const About = () => {
  return (
    <div className="about-container">
      <div className="heading">
        <h1>About Us</h1>
        <p>
          We employ industry-leading security measures to help ensure your
          crypto assets are protected and secured.
        </p>
      </div>
      <div className="container2">
        <section className="about">
          <div className="about-image">
            <img src={img} alt="About Us" />
          </div>
          <div className="about-content">
            <h2>An investment in knowledge pays the best interest.</h2>
            <p>
              Begin by gaining a solid understanding of cryptocurrencies,
              blockchain technology, and the overall crypto industry. Stay
              updated with the latest news, trends, and developments in the
              crypto space. This will help you develop expertise and credibility
              as a crypto content.
            </p>
            <Link
              to="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency"
              className="read-more"
              target="blank"
            >
              Read More
            </Link>
          </div>
        </section>
      </div>
      <Faq />
      <div className="team-section">
        <div className="container3">
          <div className="row">
            <div className="title1">
              <h1>OUR TEAM</h1>
              <p>
                Meet our exceptional web development team—a fusion of creativity
                and technical prowess. From seasoned developers to innovative
                designers, each member brings a unique perspective, fostering a
                collaborative environment where ideas flourish. United by a
                shared vision, we celebrate diversity, turning challenges into
                opportunities.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="card1">
              <div className="image-section">
                <img
                  src={img1}
                  alt="developer"
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>
              <div className="content">
                <h3>Prashant Kumar Aryan</h3>
                <h4>Web Developer</h4>
                <p>
                  At the heart of our web development triumph is Prashant Kumar
                  Aryan, the brilliant mind behind the Api calls , Networking
                  and frontend.{" "}
                </p>
              </div>
            </div>
            <div className="card1">
              <div className="image-section">
                <img src={img2} alt="developer" />
              </div>
              <div className="content">
                <h3>Sahil Singh</h3>
                <h4>Web Developer</h4>
                <p>
                  At the heart of our web development triumph is Sahil Singh,
                  the brilliant mind behind the Backend Functionality and
                  Security.{" "}
                </p>
              </div>
            </div>
            <div className="card1">
              <div className="image-section">
                <img src={img3} alt="developer" />
              </div>
              <div className="content">
                <h3>Akshat Kumar</h3>
                <h4>Web Developer</h4>
                <p>
                  At the heart of our web development triumph is Akshat Kumar,
                  the brilliant mind behind the API calls , Backend , Database
                  and Deploynment .{" "}
                </p>
              </div>
            </div>

            <div className="card1">
              <div className="image-section">
                <img src={img5} alt="developer" />
              </div>
              <div className="content">
                <h3>Shilpa Kumari</h3>
                <h4>Web Developer</h4>
                <p>
                  At the heart of our web development triumph is Shilpa Kumari,
                  the brilliant mind behind the Frontend , UI/UX ,Responsiveness
                  and Api Calls .
                </p>
              </div>
            </div>
            <div className="card1">
              <div className="image-section">
                <img src={img4} alt="developer" />
              </div>
              <div className="content">
                <h3>Divyanshi Tiwary</h3>
                <h4>Web Developer</h4>
                <p>
                  {" "}
                  At the heart of our web development triumph is Divyanshi
                  Tiwari, the brilliant mind behind the Frontend and
                  Responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
