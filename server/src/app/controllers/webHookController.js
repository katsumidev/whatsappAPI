const express = require("express");
const router = express.Router();
const socket = require("../../../index");
const livechat = require("../controllers/livechatController");

const userHandler = async (req, res) => {
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
        let data = await livechat.getReceiverChat( // pega o chat da conversa
          req.body.instanceKey,
          req.body.body.key.remoteJid.split("@")[0]
        );

        let json = JSON.parse(data);
        let chatId = json._id; // pega o chatId da conversa

        // mensagens comuns
        if (req.body.body.message.conversation) {
          await livechat.saveReceiverMsg({
            text: req.body.body.text.messages[0].message.conversation,
            from: req.body.body.text.messages[0].key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            type: "text",
          });

          socket.ioObject.emit("message", {
            type: "text",
          });
        } else if (req.body.body.message.imageMessage) {
          // imagens
          await livechat.saveReceiverMsg({
            text: req.body.body.message.imageMessage.url,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            type: "file",
          });

          socket.ioObject.emit("message", {
            type: "file",
          });
        } else if (req.body.body.message.audioMessage) {
          await livechat.saveReceiverMsg({
            text: req.body.body.message.audioMessage.url,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            type: "file",
          });

          socket.ioObject.emit("message", {
            type: "file",
          });
        } else if (
          // mensagens marcadas
          req.body.body.message.extendedTextMessage.contextInfo.quotedMessage
        ) {
          await livechat.saveReceiverMsg({
            text: req.body.body.message.extendedTextMessage.text,
            quotedMessage:
              req.body.body.message.extendedTextMessage.contextInfo
                .quotedMessage.conversation,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            type: "quotedText",
          });

          socket.ioObject.emit("message", {
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
