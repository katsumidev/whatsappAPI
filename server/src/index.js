const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/controllers/index")(app);

app.listen(3001);
console.log("Escutando na porta 3001");
