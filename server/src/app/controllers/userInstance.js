const express = require("express");
var crypto = require("crypto");

const router = express.Router();

const apiOptions = {
  server: "http://localhost:3333",
};

router.post("/init", async (req, res) => {
  const { token, key } = req.body;

  var random_secret_key = Math.random().toString(36).slice(-8);
  const hashed_key = crypto
    .createHash("sha256")
    .update(`${key}-${random_secret_key}`)
    .digest("hex");

  const resp = await fetch(
    `http://localhost:3333/instance/init?token=${token}&key=${key}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err);
    });

    console.log(resp)
});

module.exports = (app) => app.use("/instance", router);
