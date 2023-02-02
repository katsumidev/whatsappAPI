// const multer = require("multer");
// const { GridfsStorage } = require("multer-gridfs-storage");

// const storage = new GridfsStorage({
//   url: "mongodb://127.0.0.1:27017/whatapi",
//   options: {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   },
//   file: (request, file) => {
//     const match = ["image/png", "image/jpg"]

//     if (match.indexOf(file.mimeType) === -1) {
//         return`${Date.now()}-file-${file.originalname}`;
//     }

//     return {
//         bucketName: "photos",
//         filename: `${Date.now()}-file-${file.originalname}`
//     }
//   }
// });

// const upload = multer({storage})

// module.exports = {
//     upload
// }