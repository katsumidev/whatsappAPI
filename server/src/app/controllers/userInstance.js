var crypto = require("crypto");
const apiUrl = process.env.API_URL;

function encryptKey(key, userToken) {
  return `${userToken}:${crypto
    .createHash("sha256")
    .update(`${key}${userToken}`)
    .digest("hex")}`;
}

const initUser = async (req, res) => {
  const { token, key, userToken } = req.body;
  const hashed_key = encryptKey(key, userToken);

  fetch(
    `${apiUrl}/instance/init?token=${token}&key=${hashed_key}&webhook=true&webhookUrl=${process.env.SERVER_URL}/webHook/userHandler`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  )
    .then(async (response) => {
      let data = await response.json();
      console.log(data);

      if (data.qrcode.url != "") {
        setTimeout(() => {
          fetch(data.qrcode.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }).then(async (qrres) => {
            let qr = await qrres.text();

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

  fetch(`${apiUrl}/instance/delete?key=${key}`, {
    // deleta a instância criada para esse usuário
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Methods": "GET, POSconst PTIONS =PUT, DELETE",
    },
  }).then(async (response) => {
    fetch(`${apiUrl}/instance/logout?key=${key}`, {
      // assim que a instância é deletada, faz o logout do usuário da API
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Methods": "GET, POSconst PTIONS =PUT, DELETE",
      },
    });
  });
};

const listIns = async (req, res) => {
  const { userToken } = req.body;

  fetch(`${apiUrl}/instance/list`, {
    // Lista todos os usuários conectados na API
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(async (response) => {
    let data = await response.json();

    switch (response.status) {
      case 200:
        return res.send(data.data.filter((id) => id.includes(userToken)));
        break;
    }
  });
};

const getInfo = async (req, res) => {
  const { key } = req.body;

  fetch(
    // pega as informações do usuário da API
    `${apiUrl}/instance/info?key=${key}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then(async (response) => {
    let data = await response.json();

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
  const { key, id } = req.body;

  fetch(`${apiUrl}/misc/downProfile?key=${key}&id=${id}`, {
    method: "GET",
  }).then(async (response) => {
    let data = await response.json();
    return res.send(data.data);
  });
};

const checkStatus = async (req, res) => {
  const { key, userToken } = req.body;

  const hashed_key = encryptKey(key, userToken);

  fetch(
    // pega as informações do usuário da API
    `${apiUrl}/instance/info?key=${hashed_key}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  ).then(async (response) => {
    let data = await response.json();

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
