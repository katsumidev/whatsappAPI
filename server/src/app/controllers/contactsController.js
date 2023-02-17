const User = require("../models/user");
const apiUrl = process.env.API_URL;
const axios = require("axios");

const axiosReq = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const newContact = async (req, res) => {
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
      axiosReq
        .get(`${apiUrl}/misc/downProfile?key=${user_id}&id=${phone_number}`)
        .then(async (response) => {
          let data = await response.data;

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
                  createdAt: new Date(),
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
};

const deleteContact = async (req, res) => {
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
};

const consultContacts = async (req, res) => {
  const { user_token } = req.body;

  User.find({ userId: user_token }, (err, arr) => {
    arr.forEach((items) => {
      contacts = items.contactList;

      let array = contacts.map((item) => {
        return {
          number: item.phoneNumber,
          contact: item.contactName,
          pfp: item.picture,
          date: item.createdAt,
        };
      });

      return res.send(array);
    });
  });
};

const getContactPic = async (req, res) => {
  const { user_id, contact_number } = req.body;

  axiosReq
    .get(`${apiUrl}/misc/downProfile?key=${user_id}&id=${contact_number}`)
    .then(async (response) => {
      let data = await response.data;

      return res.send(data.data);
    });
};

module.exports = {
  newContact,
  deleteContact,
  consultContacts,
  getContactPic,
};
