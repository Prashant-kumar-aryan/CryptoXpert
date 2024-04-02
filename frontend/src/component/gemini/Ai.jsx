import React, { useState } from "react";
import run from "../config/gemini";
import "./Ai.css";
import { LinearProgress } from "@mui/material";

const ContextProvider = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await run(input);
      setChatHistory([...chatHistory, input, response]);
      setInput("");
      setLoading(false);
      console.log(chatHistory);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <>
      {loading && <LinearProgress />}
      <div className="ai-container">
        <h1>Hello User</h1>
        <h3 style={{ color: "gold" }}>How can I help You Today?</h3>

        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div
                className={`chat-message ${index % 2 === 0 ? "right" : "left"}`}
              >
                {chat}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="ai-form">
          <input
            type="text"
            value={input}
            placeholder="Ask a Question"
            className="input-div"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Ask</button>
        </form>
      </div>
    </>
  );
};

export default ContextProvider;
