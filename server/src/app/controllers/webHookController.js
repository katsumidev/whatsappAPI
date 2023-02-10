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
      // let messageContent = req.body.body.text.messages[0].message.conversation;
      // let extendedMessageContent = req.body.body.text.extendedTextMessage;
      // console.log("jooj = " + extendedMessageContent)

      // if (req.body.body.message.documentMessage) {
      //   if (req.body.body.key.fromMe == false) {
      //     socket.ioObject.emit("message", {
      //       content: req.body.body.message.documentMessage.url,
      //       from: req.body.body.text.messages[0].key.remoteJid.split("@")[0],
      //       to: req.body.instanceKey,
      //       type: "document",
      //     });
      //   }
      // }

      if (req.body.body.key.fromMe == false) {
        // mensagens comuns
        if (req.body.body.message.conversation) {
          socket.ioObject.emit("message", {
            content: req.body.body.text.messages[0].message.conversation,
            from: req.body.body.text.messages[0].key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            type: "text",
          });
        } else if (req.body.body.message.imageMessage) { // imagens
          socket.ioObject.emit("message", {
            content: req.body.body.message.imageMessage.url,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            type: "file",
          });
        } else if (req.body.body.message.audioMessage) {
          socket.ioObject.emit("message", {
            content: req.body.body.message.audioMessage.url,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            type: "file",
          })
        } else if ( // mensagens marcadas
          req.body.body.message.extendedTextMessage.contextInfo.quotedMessage
        ) {
          socket.ioObject.emit("message", {
            content: req.body.body.message.extendedTextMessage.text,
            quotedContent:
              req.body.body.message.extendedTextMessage.contextInfo
                .quotedMessage.conversation,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            type: "quotedText",
          });
        } 
      }

      break;
  }
};

module.exports = {
  userHandler,
};
