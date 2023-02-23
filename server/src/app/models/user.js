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
  flowList: [
    {
      name: String,
      execution: Number,
      ctr: Number,
      createdAt: {
        type: Date,
        default: Date.now,
      },
      flow: [
        {
          edges: mongoose.Schema.Types.Mixed,
          nodes: [
            {
              id: String,
              type: String,
              postition: {
                x: Number,
                y: Number,
              },
              data: mongoose.Schema.Types.Mixed,
              height: Number,
              width: Number,
            }
          ],
          viewport: {
            x: Number,
            y: Number,
            zoom: Number
          }
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;