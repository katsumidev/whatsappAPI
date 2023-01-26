const User = require("../models/user");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongo = require("mongoose");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/addContact", async (req, res) => {
  const { phone_number, contact_name, user_token } = req.body;

  User.find({ userId: user_token }, (err, arr) => {
    var duplicate = false;

    arr.forEach((items) => {
      items.contactList.forEach((contact) => {
        if (contact.phoneNumber == phone_number) {
            duplicate = true;
        }
      });
    });

    if (duplicate) {
        return res.status(503).send("O numero já está cadastrado")
    } else {
      User.findOneAndUpdate(
        {
          userId: user_token,
        },
        {
          $push: {
            contactList: {
              phoneNumber: phone_number,
              contactName: contact_name,
            },
          },
        },
        { new: true },
        (err, arr) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).json(arr.contactList);
        }
      );
    }
  });
});

router.post("/consultContacts", async (req, res) => {
  const { user_token } = req.body;

  User.find({ userId: user_token }, (err, arr) => {
    arr.forEach((items) => {
      contacts = items.contactList;

      let array = contacts.map((item) => {
        return {
          number: item.phoneNumber,
          contact: item.contactName,
        };
      });

      return res.send(array);
    });
  });
});

module.exports = (app) => app.use("/contacts", router);
