import axios from "axios";

const url = process.env.REACT_APP_URL;

export const addNewContact = async (data) => {
  try {
    return await axios.post(`${url}/contacts/addContact`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const deleteUserContact = async (data) => {
  try {
    return await axios.post(`${url}/contacts/deleteContact`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const getContacts = async (data) => {
  try {
    return await axios.post(`${url}/contacts/consultContacts`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const getInfo = async (data) => {
  try {
    return await axios.post(`${url}/instance/getInfo`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const ListInstance = async (data) => {
  try {
    return await axios.post(`${url}/instance/listIns`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const InitiateInstance = async (data) => {
  try {
    return await axios.post(`${url}/instance/initUser`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const deleteInstance = async (data) => {
  try {
    return await axios.post(`${url}/instance/deleteIns`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const sendSingleMessage = async (data) => {
  try {
    return await axios.post(`${url}/message/sendMessage`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const sendMultipleMessages = async (data) => {
  try {
    return await axios.post(`${url}/message/sendMultipleMessages`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/uploadFile`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const sendMessage = async (data) => {
  try {
    return await axios.post(`${url}/livechat/newMessage`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendImage = async (data) => {
  try {
    return await axios.post(`http://localhost:3333/message/image?key=${data.from}`, data.data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendDoc = async (data) => {
  try {
    return await axios.post(`http://localhost:3333/message/doc?key=${data.from}`, data.data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendVid = async (data) => {
  try {
    return await axios.post(`http://localhost:3333/message/video?key=${data.from}`, data.data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getCurrentChat = async (data) => {
  try {
    return await axios.post(`${url}/livechat/getChat`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getMessages = async (data) => {
  try {
    return await axios.post(`${url}/livechat/getMessages`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const downloadFile = async (data) => {
  try {
    return await axios.post(`${url}/files/getImage`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};
