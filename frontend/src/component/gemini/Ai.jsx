import React, { createElement, useState } from "react";
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
      // console.log(chatHistory);
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  function chats(chat) {
    // console.log("type = ", typeof chat);
    // console.log("content = ", chat);
    if (chat === undefined) return "";

    const children = [];
    let temp = [];
    let para = null;
    let curr = 0,
      next = -1;

    while (1) {
      next = chat.indexOf("*", curr);
      if (next === -1) {
        para = createElement("p", {}, chat.substr(curr));
        children.push(para);
        break;
      }

      if (next > curr) {
        temp.push(createElement("p", {}, chat.substr(curr, next - curr)));
      }

      curr = next + 2;
      if (chat[next + 1] === " ") {
        para = createElement("p", {}, ...temp);
        children.push(para);
        para = null;
        temp = [];
      } else {
        next = chat.indexOf("**", curr);
        temp.push(createElement("br"));
        temp.push(createElement("h3", {}, chat.substr(curr, next - curr)));
        curr = next + 2;
      }
    }

    return createElement("div", {}, ...children);
  }

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
                className={`chat-message ${
                  index % 2 === 0 ? "right" : "left_chat"
                }`}
              >
                {index % 2 === 0 ? chat : chats(chat)}
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
