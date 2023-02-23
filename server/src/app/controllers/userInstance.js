var crypto = require("crypto");
const apiUrl = process.env.API_URL;
const axios = require("axios");

const axiosReq = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

function encryptKey(key, userToken) {
  return `${userToken}:${crypto
    .createHash("sha256")
    .update(`${key}${userToken}`)
    .digest("hex")}`;
}

const initUser = async (req, res) => {
  // cria a instância de usuário
  const { token, key, userToken } = req.body;
  const hashed_key = encryptKey(key, userToken);

  axiosReq
    .get(
      `${apiUrl}/instance/init?token=${token}&key=${hashed_key}&webhook=true&webhookUrl=${process.env.SERVER_URL}/webHook/userHandler`
    )
    .then(async (response) => {
      let data = await response.data;

      if (data.qrcode.url != "") {
        // gera o qr code do usuário
        setTimeout(() => {
          axios.get(data.qrcode.url, {
            headers: {
              "Content-Type": "text/plain",
            }
          }).then(async (qrres) => {
            let qr = await qrres.data;

            return res.send({ key: data.key, qrdata: qr });
          });
        }, [2000]);
      } else {
        return res.send("Error generating the instance.");
      }
    })
    .catch((err) => {
      return res.send(err);
    });
};

const deleteIns = async (req, res) => {
  const { key } = req.body;

  axios
    .delete(`${apiUrl}/instance/delete?key=${key}`, {
      // deleta a instância criada para esse usuário
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
    })
    .then(async (response) => {
      axios.delete(`${apiUrl}/instance/logout?key=${key}`, {
        // assim que a instância é deletada, faz o logout do usuário da API
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
        },
      });
    });
};

const listIns = async (req, res) => {
  const userToken = req.headers["authentication"]
  // Lista todos os usuários conectados na API
  axiosReq.get(`${apiUrl}/instance/list`).then(async (response) => {
    let data = await response.data;

    switch (response.status) {
      case 200:
        return res.send(data.data.filter((id) => id.includes(userToken)));
        break;
    }
  });
};

const getInfo = async (req, res) => {
  const userId = req.headers["authentication"]

  axiosReq
    .get(
      // pega as informações do usuário da API
      `${apiUrl}/instance/info?key=${userId}`
    )
    .then(async (response) => {
      let data = await response.data;

      if (data.instance_data.user.id != null) {
        // se o usuário já está cadastrado no sistema, significa que ele escaneou o qrcode com sucesso.
        return res.status(200).send(data);
      } else {
        // caso o contrário:
        return res.status(404).send("Usuário não encontrado");
      }
    });
};

const downloadPfp = async (req, res) => {
  // baixa a foto de perfil do usuário da aplicação
  const userId = req.headers["authentication"]
  const contactNumber = req.query.contactNumber

  axiosReq
    .get(`${apiUrl}/misc/downProfile?key=${userId}&id=${contactNumber}`)
    .then(async (response) => {
      let data = await response.data;
      return res.send(data.data);
    });
};

const checkStatus = async (req, res) => {
  const userId = req.headers["userId"]
  const userToken = req.headers["authentication"]

  const hashed_key = encryptKey(userId, userToken);

  axiosReq
    .get(
      // pega as informações do usuário da API
      `${apiUrl}/instance/info?key=${hashed_key}`
    )
    .then(async (response) => {
      let data = await response.data;

      if (data.instance_data.user.id != null) {
        // se o usuário já está cadastrado no sistema, significa que ele escaneou o qrcode com sucesso.
        return res.status(200).send("Usuário encontrado e registrado");
      } else {
        // caso o contrário:
        return res.status(404).send("Usuário não encontrado");
      }
    });
};

module.exports = {
  initUser,
  deleteIns,
  listIns,
  getInfo,
  checkStatus,
  downloadPfp,
};
