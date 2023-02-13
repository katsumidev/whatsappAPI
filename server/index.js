const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/app/routes/Routes")(app);

const server = app.listen(3005, function () {
  console.log("escutando na porta 3005");
});

var io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3002", // ip do front-end
    methods: ["GET", "POST"],
  },
});

io.on("connection", function (socket) {
  console.log("user connected");
});

const socketIoObject = io;
module.exports.ioObject = socketIoObject;
