import React, { useState, useRef, useEffect } from 'react';
import './chat.css';

const Chat = () => {
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chats]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChats([...chats, chat]);
    setChat("");
  }

  return (
    <>
      <div className='title'>
        <h1>World Chat</h1>
      </div>
      <div className='container' ref={containerRef}>
        {chats.map((message, index) => (
          <div key={index} className={index % 2 === 0 ? 'left chat' : 'right chat'}>
            {message}
          </div>
        ))}
      </div>
      <div className='formarea'>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder='Enter Chat'
              required
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chat;
