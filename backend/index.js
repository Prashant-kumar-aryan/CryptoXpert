const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("User connected(personal socket id)");
  console.log(socket.id);

  socket.on("message", (data) => {
    console.log(`The info is ${data.message} from the user ${data.socketID}`);

    io.emit("receive-message", {
      message: data.message,
      socketID: data.socketID,
    });
  });

  socket.on("disconnect", () => {
    console.log("user Disconnected ", socket.id);
  });
});

mongoose
  .connect("mongodb+srv://dark:darkrino@cluster0.jeqnbtu.mongodb.net/crypto")
  .then(() => {
    server.listen(4000, () => {
      console.log(`Server is listning on Port ${4000} `);
    });
  })
  .catch((err) => {
    console.error(err);
  });

const register = require("./routes/register");
app.use("/register", register);

const login = require("./routes/login");
app.use("/login", login);
