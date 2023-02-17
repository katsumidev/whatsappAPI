const express = require("express");
var cors = require("cors");
const path = require("path/posix");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

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
