import React from "react";
import ai_FloatingLogo from "./images/logo/ai.png";
import "./FloatingLogo.css";
import { Link } from "react-router-dom";

const AiIcon = () => {
  return (
    <div className="FloatingLogo-container">
      <Link to="/ai">
        <img
          src={ai_FloatingLogo}
          alt="FloatingLogo"
          className="FloatingLogo"
          style={{ right: "7%", height: "9vh", bottom: "41px" }}
        />
      </Link>
      <div className="FloatingLogo-text">Ai-Assistant</div>
    </div>
  );
};

export default AiIcon;
