import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./AccessDeniedPage.css";

const AccessDeniedPage = () => {
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="access-denied-container">
      <h2 className="access-denied-message">
        Please login to access this resource
      </h2>
      <Button
        variant="contained"
        className="access-denied-button"
        onClick={redirectToLoginPage}
      >
        Login
      </Button>
    </div>
  );
};

export default AccessDeniedPage;
