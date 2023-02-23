const grid = require("gridfs-stream");
const mongoose = require("mongoose");

// essa classe é responsavel por fazer o upload dos arquivos do usuário pro banco de dados, salvando eles como buckets no mongo
let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});

const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).send("Arquivo não encontrado.");
  }

  const imageUrl = `/file/${req.file.filename}`;
  return res.status(200).json(imageUrl);
};

const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({
      filename: req.params.filename,
    });

    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    return res.send(err);
  }
};

module.exports = {
  uploadFile,
  getImage,
};
