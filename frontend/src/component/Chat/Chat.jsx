import styles from "./styles.module.css";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { io } from "socket.io-client";

const Chat = () => {
  const socket = useMemo(() => io("http://localhost:8081/"), []);
  const user = localStorage.getItem("crypto_email").split("@")[0];
  const [socketID, setSocket] = useState("");
  const [message, setMessage] = useState("");
  const [room, SetRoom] = useState("");
  const [chats, setChats] = useState([]);
  const chatContainerRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("crypto_email");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log(" user connected (personal id):", socket.id);
      setSocket(socket.id);
    });

    socket.on("receive-message", (data) => {
      setChats((prevChats) => [
        ...prevChats,
        { message: data.message, ID: data.ID },
      ]);
      scrollToBottom();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>Crypto Chat</h1>
          {/* <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button> */}
        </nav>
        <div ref={chatContainerRef} className={styles.chat_container}>
          {chats.map((chat, index) => (
            <div
              key={index}
              className={
                chat.ID === socketID
                  ? styles.sent_message
                  : styles.received_message
              }
            >
              <p
                style={{ fontSize: "10px", color: "green", fontWeight: "900" }}
              >
                {user}
              </p>
              {chat.message}
            </div>
          ))}
        </div>
        <div className={styles.input_container}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.input}
            />
            <button type="submit" className={styles.white_btn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
