import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import axios from "axios";
import "../component/Styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/2ad60bd3-3b44-477a-bfd5-7537ad1a48b0",
        data
      )
      .then((response) => {
        console.log(response);
        setEmail("");
        setName("");
        setMessage("");
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>CONTACT US</h2>
        <p>
          We value your feedback and are eager to assist you with any inquiries
          or concerns regarding our crypto app. Our dedicated support team is
          here to ensure your experience is seamless and secure. Whether you
          have questions about account management, transaction processes, or any
          other aspect of our app, please don't hesitate to reach out. You can
          contact us through the support portal within the app, or
          alternatively, feel free to send us an email at
          kumarishilpa97161@gmail.com. Your satisfaction is our priority, and we
          appreciate your trust in our crypto app.
        </p>
      </div>
      <div className="container1">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <MdLocationPin />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>Kiit University,Bhubaneshwar Odisha,751024</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              {" "}
              <MdOutlineEmail />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>kumarishilpa97161@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaPhoneVolume />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 725 041 2245</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>We love to hear from you</h2>
            <div className="inputBox">
              <input
                type="text"
                name="name"
                required
                autoComplete="off"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                name="email"
                required="required"
                autoComplete="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                required="required"
                autoComplete="off"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="send" />
            </div>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Message Sent successfully!</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Contact;
