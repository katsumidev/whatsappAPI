const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config(); // chama as configurações de variaveis ambiente

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb", // define o limite de upload para 50 mb
    extended: true,
    parameterLimit: 50000,
  })
);

require("./src/app/routes/Routes")(app); // "Baixa" as rotas do servidor

const server = app.listen(process.env.PORT, function () {
  // Inicia o servidor na porta selecionada
  console.log("[!!] Servidor aberto na porta - " + process.env.PORT + " [!!]");
});

var io = require("socket.io")(server, {
  cors: {
    origin: process.env.CLIENT_URL, // ip do front-end
    methods: ["GET", "POST"],
  },
});

const socketIoObject = io;
module.exports.ioObject = socketIoObject;
