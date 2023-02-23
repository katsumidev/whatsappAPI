const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const crypto = require("crypto");

const storage = new GridFsStorage({
  url: "mongodb://127.0.0.1:27017/whatapi",
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];
    const hash = crypto.randomBytes(20).toString("hex");
    const hashedBuffer = `${hash.toString("hex")}-${file.originalname
      .replaceAll(/\s/g, "")
      .replaceAll(/[^0-9a-zA-Z.]/g, "")}`;

    if (match.indexOf(file.mimeType) === -1) {
      return hashedBuffer;
    }

    return {
      bucketName: "photos",
      filename: hashedBuffer,
    };
  },
});

const upload = multer({ storage });

module.exports = {
  upload,
};
