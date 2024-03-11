import React, { useState, createContext } from 'react';
import run from '../config/gemini';
import "./Ai.css";

export const Context = createContext();

const ContextProvider = () => {
  const [input, setInput] = useState("");
  const [resultData, setResultData] = useState("");

  const handleSubmit = async (e)=> {
    e.preventDefault();
    try {
      const response = await run(input);
      setResultData(response);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <div className="ai-container">
      <h1>Hello User</h1>
      <h3>How can I help You Today?</h3>
      <form onSubmit={handleSubmit} className="ai-form">
        <input
          type="text"
          value={input}
          placeholder="Ask a Question"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
      {resultData && <p className="ai-response">{resultData}</p>}
      {/* Optionally integrate the Loader component here if needed */}
    </div>
  );
};

export default ContextProvider;
