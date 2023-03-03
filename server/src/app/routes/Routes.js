const express = require("express");
const contacts = require("../controllers/contactsController");
const livechat = require("../controllers/livechatController");
const message = require("../controllers/messagesControler");
const webhook = require("../controllers/webHookController");
const instance = require("../controllers/userInstance");
const files = require("../controllers/fileController");
const upload = require("../utils/upload");
const flow = require("../controllers/flowController");
const flowMap = require("../controllers/flowMapsController");
const tagsContacts = require("../controllers/tagsController");
const path = require("path")

const route = express.Router();

//web hook
route.post("/webHook/userHandler", webhook.userHandler);

//contacts
route.post("/contacts/addContact", contacts.newContact);
route.post("/contacts/deleteContact", contacts.deleteContact);
route.get("/contacts/consultContacts", contacts.consultContacts);
route.get("/contacts/getContactPic", contacts.getContactPic);
route.get("/contacts/getStatus", contacts.getStatus);
route.get("/contacts/blockUserContact", contacts.blockUser);

//contacts Tags

route.post("/contacts/tags/new", tagsContacts.createTagsForContact);
route.delete("/contacts/tags/delete", tagsContacts.deleteTagForContact)

// Tags
route.post("/tags/new", tagsContacts.createTagsForUser)
route.post("/tags/get", tagsContacts.getAllTags)
route.put("/tags/update", tagsContacts.updateTagsForUser)
route.delete("/tags/delete", tagsContacts.deleteTagForUser)

//livechat
route.post("/livechat/newMessage", livechat.newMessage);
route.post("/livechat/clearChat", livechat.clearConversation);
route.get("/livechat/getChat", livechat.getChat);
route.get("/livechat/getMessages", livechat.getMessages);
route.get("/livechat/getLastMessage", livechat.getLastMessage);

//messages
route.post("/message/sendMessage", message.sendMessage);
route.post("/message/sendMultipleMessages", message.sendMultipleMessages);

//user
route.post("/instance/initUser", instance.initUser);
route.post("/instance/deleteIns", instance.deleteIns);
route.get("/instance/listIns", instance.listIns);
route.get("/instance/getInfo", instance.getInfo);
route.get("/instance/checkStatus", instance.checkStatus);
route.get("/instance/downloadPfp", instance.downloadPfp);

//User  flows
route.post("/flow/create", flow.newFlow);
route.post("/flow/get", flow.getFlows);
route.post("/flow/getOne", flow.getOneFlow);
route.post("/flow/update", flow.updateFlow);
route.post("/flow/delete", flow.deleteFlow);

// Flow maps
route.post("/flow/getmap", flowMap.getFlowMap)
route.post("/flow/map", flowMap.createMapFlow)

//files
route.post("/file/uploadFile", upload.upload.single("file"), files.uploadFile);
route.get("/file/:filename", files.getImage);
route.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "..", "..", "tmp", "uploads"))
);

module.exports = (app) => app.use("/", route);
