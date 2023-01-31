const User = require("../models/user");
const express = require("express");
const jwt = require("jsonwebtoken");
const mongo = require("mongoose");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/addContact", async (req, res) => {
  const { phone_number, contact_name, user_token, user_id } = req.body;

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
      return res.status(503).send("O numero já está cadastrado");
    } else {
      fetch(
        `http://localhost:3333/misc/downProfile?key=${user_id}&id=${phone_number}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(async (response) => {
        let data = await response.json();

        User.findOneAndUpdate(
          {
            userId: user_token,
          },
          {
            $push: {
              contactList: {
                phoneNumber: phone_number,
                contactName: contact_name,
                picture: data.data,
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
      });
    }
  });
});

router.post("/deleteContact", async (req, res) => {
  const { user_token, phone_number } = req.body;

  User.find({ userId: user_token }, (err, arr) => {
    arr.forEach((items) => {
      User.findOneAndUpdate(
        { phoneNumber: phone_number },
        {
          $pull: { contactList: { phoneNumber: phone_number } },
        },
        { new: true },
        (err, arr) => {
          if (arr) {
            return res.status(200).send("contato deletado");
          }
        }
      );
    });
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
          pfp: item.picture,
        };
      });

      return res.send(array);
    });
  });
});

router.post("/getContactPic", async (req, res) => {
  const { user_id, contact_number } = req.body;

  fetch(
    `http://localhost:3333/misc/downProfile?key=${user_id}&id=${contact_number}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(async (response) => {
    let data = await response.json();

    return res.send(data.data);
  });
});

module.exports = (app) => app.use("/contacts", router);
