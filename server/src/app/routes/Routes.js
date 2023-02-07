const express = require("express");
const contacts = require("../controllers/contactsController");
const livechat = require("../controllers/livechatController");
const message = require("../controllers/messagesControler");
const webhook = require("../controllers/webHookController");
const instance = require("../controllers/userInstance");
const files = require("../controllers/fileController");
const upload = require("../utils/upload");

const route = express.Router();

//web hook
route.post("/webHook/userHandler", webhook.userHandler);

//contacts
route.post("/contacts/addContact", contacts.newContact);
route.post("/contacts/deleteContact",  contacts.deleteContact);
route.post("/contacts/consultContacts",  contacts.consultContacts);
route.post("/contacts/getContactPic",  contacts.getContactPic);

//livechat
route.post("/livechat/getChat", livechat.getChat);
route.post("/livechat/getMessages", livechat.getMessages);
route.post("/livechat/newMessage", livechat.newMessage);

//messages
route.post("/message/sendMessage", message.sendMessage);
route.post("/message/sendMultipleMessages", message.sendMultipleMessages);

//user
route.post("/instance/initUser", instance.initUser);
route.post("/instance/deleteIns", instance.deleteIns);
route.post("/instance/listIns", instance.listIns);
route.post("/instance/getInfo", instance.getInfo);
route.post("/instance/checkStatus", instance.checkStatus);

//files
route.post("/file/uploadFile", upload.upload.single("file"), files.uploadFile);
route.get("/file/:filename", files.getImage)

module.exports = (app) => app.use("/", route)