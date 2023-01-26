const mongoose = require("../../database");

const UsersSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  contactList: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;