const express = require("express");
var crypto = require("crypto");
const router = express.Router();
const ChatMessage = require("../models/chatmessage");
const LiveChat = require("../models/livechat");

router.post("/getChat", async (req, res) => {
  try {
    const { from, to } = req.body;

    const exist = await LiveChat.findOne({
      members: {
        $all: [from, to],
      },
    });

    if (!exist) {
      const newChat = new LiveChat({
        members: [from, to],
      });

      await newChat.save();
    }

    let conversation = await LiveChat.findOne({
      members: { $all: [from, to] },
    });

    return res.status(200).json(conversation);
  } catch (err) {
    return res.send(err);
  }
});

router.post("/newMessage", async (req, res) => {
  const { text, from, to, chatId } = req.body;
  const newMessage = new ChatMessage(req.body);

  try {
    await newMessage.save();
    await LiveChat.findByIdAndUpdate(chatId, { message: text });
    return res.status(200).send("mensagem enviada com sucesso");
  } catch (err) {
    return res.send(err);
  }
});

router.post("/getMessages", async (req, res) => {
  const { chatId } = req.body;

  try {
    const messages = await ChatMessage.find({
      chatId: chatId,
    });
    return res.status(200).json(messages);
  } catch (err) {
    return res.send(err);
  }
});

module.exports = (app) => app.use("/live-chat", router);
