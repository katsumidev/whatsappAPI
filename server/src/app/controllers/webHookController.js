const express = require("express");
const router = express.Router();
const socket = require("../../../index");

const userHandler = async (req, res) => {
  console.log(req.body);

  switch (req.body.type) {
    case "connection":
      if (req.body.body.connection == "open") {
        socket.ioObject.emit("key", req.body.instanceKey);
      }
      break;
    case "message":
      let messageContent = req.body.body.text.messages[0].message.conversation;

      if (messageContent) {
        if (req.body.body.key.fromMe == false) {
          socket.ioObject.emit("message", {
            content: messageContent,
            from: req.body.body.text.messages[0].key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
          });
        }
      }

      break;
  }
};

module.exports = {
  userHandler
}