const LiveChat = require("../models/livechat");
const ChatMessage = require("../models/chatmessage");

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

const newMessage = async (req, res) => {
  const { text, from, to, chatId, type, quotedMessage } = req.body;
  const newMessage = new ChatMessage(req.body);

  try {
    fetch(`http://localhost:3333/message/text?key=${from}`, {
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
      await newMessage.save();
      await LiveChat.findByIdAndUpdate(chatId, {
        message: text,
      });

      return res.status(200).send("mensagem enviada com sucesso");
    });
  } catch (err) {
    return res.send(err);
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.body;

  try {
    const messages = await ChatMessage.find({
      chatId: chatId,
    });
    return res.status(200).json(messages);
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  getMessages,
  newMessage,
  getChat,
};
