const LiveChat = require("../models/livechat");
const ChatMessage = require("../models/chatmessage");
const apiUrl = process.env.API_URL;

const getChat = async (req, res) => {
  try {
    const { from, to } = req.body;

    const exist = await LiveChat.findOne({
      // procura no banco de dados o chat correspondente
      members: {
        $all: [from, to],
      },
    });

    if (!exist) {
      // se esse chat não existir, ele gera um novo documento no banco pra ele
      const newChat = new LiveChat({
        members: [from, to],
      });

      await newChat.save(); // salva o documento
    }

    let conversation = await LiveChat.findOne({
      // se ele já existir, retorna ele para o requisitor
      members: { $all: [from, to] },
    });

    return res.status(200).json(conversation);
  } catch (err) {
    return res.send(err);
  }
};

const getLastMessage = async (req, res) => {
  const { from, to } = req.body;

  let conversation = await LiveChat.findOne({
    members: { $all: [from, to] },
  });

  let string = JSON.stringify(conversation);
  let obj = JSON.parse(string);
  let chatId = obj?._id;

  const lastMessage = await ChatMessage.findOne({
    chatId: chatId,
    from: to,
  }).sort({ $natural: -1 });

  const unreadMessages = await ChatMessage.find({
    chatId: chatId,
    read: false,
  }).count();

  return res.json({
    lastMessage: lastMessage,
    unreadMessagesCount: unreadMessages,
  });
};

const newMessage = async (req, res) => {
  const { text, from, to, chatId, type, quotedMessage, caption } = req.body;
  const newMessage = new ChatMessage(req.body);

  try {
    if (type != "file") {
      fetch(`${apiUrl}/message/text?key=${from}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: to,
          message: text,
        }),
      }).then(async (response) => {
        return res.status(200).send("mensagem enviada com sucesso");
      });
    }

    await newMessage.save();
    await LiveChat.findByIdAndUpdate(chatId, {
      message: text,
      caption: caption,
    });
  } catch (err) {
    return res.send(err);
  }
};

const saveReceiverMsg = async (data) => {
  const newMessage = new ChatMessage(data);

  try {
    if (data.type != "file") {
      fetch(`${apiUrl}/message/text?key=${data.from}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: data.to,
          message: data.text,
        }),
      }).then(async (response) => {});
    }

    await newMessage.save();
    await LiveChat.findByIdAndUpdate(data.chatId, {
      message: data.text,
      caption: data.caption,
    });
  } catch (err) {
    return console.log("FALHA ", err);
  }
};

const getReceiverChat = async (from, to) => {
  try {
    const exist = await LiveChat.findOne({
      // procura no banco de dados o chat correspondente
      members: {
        $all: [from, to],
      },
    });

    if (!exist) {
      // se esse chat não existir, ele gera um novo documento no banco pra ele
      const newChat = new LiveChat({
        members: [from, to],
      });

      await newChat.save(); // salva o documento
    }

    let conversation = await LiveChat.findOne({
      // se ele já existir, retorna ele para o requisitor
      members: { $all: [from, to] },
    });

    return JSON.stringify(conversation);
  } catch (err) {
    return err;
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.body;

  try {
    const messages = await ChatMessage.find({
      chatId: chatId,
    });

    await ChatMessage.find({ chatId: chatId }).update({ $set: { read: true } }); // quando clicado no chat, torna todas as mensagens não lidas e mensagens lidas.

    return res.status(200).json(messages);
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  getMessages,
  newMessage,
  getChat,
  saveReceiverMsg,
  getReceiverChat,
  getLastMessage,
};
