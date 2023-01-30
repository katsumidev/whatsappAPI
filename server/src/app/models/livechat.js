const mongoose = require("../../database");

const ChatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const LiveChat = mongoose.model("LiveChat", ChatSchema);

module.exports = LiveChat;
