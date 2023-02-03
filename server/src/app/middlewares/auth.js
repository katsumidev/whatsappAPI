const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token" });
  }

  const parts = authHeader.split(" ");

  if (!parts.length === 2) {
    return res.status(401).send({ error: "Invalid token" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformatted" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: "Invalid token" });
    }

    req.userId = decoded.id;
    return res.send(req.userId)
  });
};

// este middleware não é usado em nenhum lugar, é para ser usado futuramente