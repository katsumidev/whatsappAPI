const User = require("../models/user");
const apiUrl = process.env.API_URL;
const axios = require("axios");

const axiosReq = axios.create({
  // cria a instância de conexão do axios
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const newContact = async (req, res) => {
  const { phone_number, contact_name, user_token, user_id, email } = req.body;

  try {
    User.find({ userId: user_token }, (err, arr) => {
      // procura por duplicatas de contatos no banco, se houver, não adiciona o contato
      var duplicate = false;

      arr.forEach((items) => {
        items.contactList.forEach((contact) => {
          if (contact.phoneNumber == phone_number) {
            duplicate = true;
          }
        });
      });

      if (duplicate) {
        return res.status(503).send("[!!] The contact already exist");
      } else {
        // caso o número não esteja cadastrado no banco
        axiosReq
          .get(`${apiUrl}/misc/downProfile?key=${user_id}&id=${phone_number}`) // pega a foto de usuário do número
          .then(async (response) => {
            let data = await response.data;

            User.findOneAndUpdate(
              {
                userId: user_token,
              },
              {
                $push: {
                  // salva o contato no banco de dados
                  contactList: {
                    phoneNumber: phone_number,
                    contactName: contact_name,
                    picture: data.data,
                    createdAt: new Date(),
                    email: email,
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
          }).catch((err) => console.log("[!!] The contact doesn't have a whatsapp account!"));
      }
    });
  } catch (err) {
    console.log("[!!] Error saving contact - " + err);
  }
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
            return res.status(200).send("[!!] Contact deleted.");
          }
        }
      );
    });
  });
};

const consultContacts = async (req, res) => {
  const userToken = req.headers["authentication"]

  User.find({ userId: userToken }, (err, arr) => {
    // puxa todos os contatos de determinado usuário, busca através da identificação do usuário (user_token)
    arr.forEach((items) => {
      contacts = items.contactList;

      let array = contacts.map((item) => {
        return {
          number: item.phoneNumber,
          contact: item.contactName,
          pfp: item.picture,
          date: item.createdAt,
          email: item.email,
        };
      });

      return res.send(array);
    });
  });
};

const getContactPic = async (req, res) => {
  // pega a foto do contato
  // const { user_id, contact_number } = req.body;
  const userId = req.headers["userId"]
  const contactNumber = req.query.contactId;

  axiosReq
    .get(`${apiUrl}/misc/downProfile?key=${userId}&id=${contactNumber}`)
    .then(async (response) => {
      let data = await response.data;

      return res.send(data.data);
    })
    .catch((err) => {
      return res.send("[!! No picture found [!!] " - err);
    });
};

const getStatus = async (req, res) => {
  const userId = req.headers["userid"]
  const contactNumber = req.query.contactNumber;

  axiosReq
    .get(`${apiUrl}/misc/getStatus?key=${userId}&id=${contactNumber}`)
    .then(async (response) => {
      let data = await response.data;
      return res.send(data.data);
    })
    .catch((err) => {
      return res.send("[!] No status found [!]");
    });
};

module.exports = {
  newContact,
  deleteContact,
  consultContacts,
  getContactPic,
  getStatus,
};
