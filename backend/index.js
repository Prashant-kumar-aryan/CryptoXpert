const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
const server = createServer(app);
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

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

        const login = require('./routes/login');
        app.use('/login', login);

        const chaos = require('./routes/chaos');
        // import chaos from './routes/chaos'
        app.use('/chaos', chaos);
        io.emit("receive-message", {
            message: data.message,
            socketID: data.socketID,
        });
    });

    socket.on("disconnect", () => {
        console.log("user Disconnected ", socket.id);
    });
});

const pass = encodeURIComponent("database@123");
const uri = `mongodb+srv://sahil:${pass}@cluster0.vhve1kr.mongodb.net/crypto?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
    .connect(uri)
    .then(() => {
        app.listen(4000, () => {
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
