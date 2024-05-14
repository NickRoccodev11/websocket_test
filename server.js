const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const PORT = 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://6642dca28081d56cc6da760b--earnest-florentine-5e5f04.netlify.app/",
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("sendMessage", (data) => {
    data = data + " from the server"
    socket.emit("receiveMessage", data);
  });
});

server.listen(PORT, () => {
  console.log("server running on " + PORT);
});
