const express = require("express");
var crypto = require("crypto");
const router = express.Router();
const http = require("http");
const socketIo = require("socket.io");
const server = require("../../index")


const io = socketIo(server, {
  cors: {
    origin: "http://localhost:300",
  },
});

io.on("connection", (socket) => {
  console.log("client connected to socket");

  io.join("qrcode-vrfy");

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

router.post("/sendMessage", async (req, res) => {
  const { user_id, msg, phone_number } = req.body;

  fetch(`http://localhost:3333/message/text?key=${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: phone_number,
      message: msg,
    }),
  }).then(async (response) => {
    return res.send("mensagem enviada");
  });
});

router.post("/sendMultipleMessages", async (req, res) => {
  const { user_id, msg, number_list } = req.body;

  number_list.forEach((number) => {
    fetch(`http://localhost:3333/message/text?key=${user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: number,
        message: msg,
      }),
    }).then(async (response) => {
      return res.send("mensagens enviadas.");
    });
  });
});

router.post("/webHook", async (req, res) => {
  console.log(req.body)

  switch (req.body.type) {
    case "connection":
      if (req.body.body.connection == "open") {
        if (req.body.instanceKey == hashed_key) {
          io.to("qrcode-vrfy").emit(req.body.instanceKey)
        }
      }
      break;
  }
});

module.exports = (app) => app.use("/message", router);
