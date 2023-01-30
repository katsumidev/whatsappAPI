const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/whatapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
