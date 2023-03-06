const express = require("express");
const socket = require("../../../index");
const fs = require("fs");
const crypto = require("crypto");
const livechat = require("../controllers/livechatController");
const path = require("path");

const userHandler = async (req, res) => {
  switch (req.body.type) {
    case "connection": // se caso o web hook recebido por do tipo de conexão
      if (req.body.body.connection == "open") {
        socket.ioObject.emit("key", req.body.instanceKey); // diga para o front-end que o usuário escaneou o qrcode
      }
      break;
    case "message":
      if (req.body.body.key.fromMe == false) {
        // execute apenas se essa mensagem veio de outra pessoa
        let data = await livechat.getReceiverChat(
          // pega o chat da conversa
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
            read: false,
            type: "text",
          });

          socket.ioObject.emit("message", {
            type: "text",
          });
        } else if (req.body.body.message.imageMessage) {
          // imagens
          const pushName = req.body.body.pushName;
          const buffer = Buffer.from(req.body.body.msgContent, "base64");

          const hash = crypto.randomBytes(20).toString("hex");
          const hashedBuffer = `${hash.toString("hex")}-${pushName
            .replaceAll(/\s/g, "")
            .replaceAll(/[^0-9a-zA-Z.]/g, "")}`;

          const dest = path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "tmp",
            "uploads",
            `${hashedBuffer}.jpg`
          );
          fs.writeFileSync(dest, buffer);

          await livechat.saveReceiverMsg({
            text: `/files/${hashedBuffer}.jpg`,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            read: false,
            type: "file",
          });

          socket.ioObject.emit("message", {
            type: "file",
          });
        } else if (req.body.body.message.stickerMessage) {
          // figurinhas
          console.log("figurinhas não são suportadas!")
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
            read: false,
            type: "quotedText",
          });

          socket.ioObject.emit("message", {
            type: "quotedText",
          });
        } else if (req.body.body.message.extendedTextMessage.text) {
          // texto2
          await livechat.saveReceiverMsg({
            text: req.body.body.message.extendedTextMessage.text,
            from: req.body.body.key.remoteJid.split("@")[0],
            to: req.body.instanceKey,
            chatId: chatId,
            read: false,
            type: "text",
          });

          socket.ioObject.emit("message", {
            type: "text",
          });
        } else {
          console.log("sem handle");
        }
      }

      break;
  }
};

module.exports = {
  userHandler,
};
