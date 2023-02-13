const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/app/routes/Routes")(app);

const server = app.listen(process.env.PORT, function () {
  console.log("escutando na porta - " + process.env.PORT);
});

var io = require("socket.io")(server, {
  cors: {
    origin: process.env.CLIENT_URL, // ip do front-end
    methods: ["GET", "POST"],
  },
});

io.on("connection", function (socket) {
  console.log("user connected");
});

const socketIoObject = io;
module.exports.ioObject = socketIoObject;
