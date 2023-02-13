const apiUrl = process.env.API_URL

const sendMessage = async (req, res) => {
  const { user_id, msg, phone_number } = req.body;

  fetch(`${apiUrl}/message/text?key=${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: phone_number,
      message: msg,
    }),
  }).then(async (response) => {
    return res.send("mensagem enviada");
  });
};

const sendMultipleMessages = async (req, res) => {
  const { user_id, msg, number_list } = req.body;

  number_list.forEach((number) => {
    fetch(`${apiUrl}/message/text?key=${user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: number,
        message: msg,
      }),
    }).then(async (response) => {
      return res.send("mensagens enviadas.");
    });
  });
};

module.exports = {
  sendMessage,
  sendMultipleMessages
}