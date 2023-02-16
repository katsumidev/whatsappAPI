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
    quotedMessage: {
      type: String,
    },
    caption: {
      type: String,
    },
    type: {
      type: String,
    },
    read: {
      type: Boolean,
    },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const ChatMessage = mongoose.model("ChatMessage", MessageSchema);

module.exports = ChatMessage;
