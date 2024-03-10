import React from 'react';
import './chat.css';

const Chat = () => {
  return (
    <>
      <div className='title'>
        <h1>World Chat</h1>
      </div>
      <div className='container'>
        <div className='left chat'>Hello</div>
        <div className='right chat'>teri maa ki chut</div>
        <div className='left chat'>hat madharchod</div>
        <div className='right chat'>lund lele</div>
        <div className='left chat'>chal chutiye</div>
      </div>
      <div className='formarea'>
        <form>
          <div className="input-group">
            <input type="text" />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Chat;
