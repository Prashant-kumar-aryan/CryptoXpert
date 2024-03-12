import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
import { Container, TextField, Typography, Button } from '@mui/material'; 

const Chat = () => {
  const socket = useMemo(() => io('http://localhost:3000/'), []);

  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const [socketID, setSocket] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', {message,room});
    setMessage('');
  };
  useEffect(() => {
    socket.on('connect', () => {
      console.log(' user connected (personal id):', socket.id);
      setSocket(socket.id);
    });

    socket.on('welcome', (s) => {
      console.log(s);
    });

    socket.on("receive-message",(data) =>{
      console.log(data);
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" component="div" gutterBottom>
        Welcome to socket Chat<hr></hr> 
        Your ID: 
        {
          socketID
        }
        <hr></hr>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="outlined"
          variant="outlined"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <TextField
          id="outlined-basic"
          label="outlined"
          variant="outlined"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Chat;
