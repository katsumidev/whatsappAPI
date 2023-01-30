const mongoose = require("../../database");

const MessageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
    },
    text: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ChatMessage = mongoose.model("ChatMessage", MessageSchema);

module.exports = ChatMessage;
