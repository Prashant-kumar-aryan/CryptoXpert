require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const { Server } = require("socket.io");
const { createServer } = require("http");

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected (personal socket id):", socket.id);

  socket.on("message", (data) => {
    console.log(`Info: ${data.message}`);
    if (data.room === "") {
      const ret = {
        message: data.message,
        ID: socket.id,
        user: data.user,
      };
      console.log(data);
      io.emit("receive-message", ret);
    } else {
      io.to(data.room).emit(
        "receive-message",
        `Message From : ${socket.id} Received Message : ${data.message}`
      );
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT;
server.listen(port, console.log(`Listening on port ${port}...`));
