// Este arquivo guarda todas as funções responsaveis por fazer conexões e requisições ao banco de dados
import axios from "axios";
const url = process.env.REACT_APP_URL;
const apiUrl = process.env.REACT_APP_API_URL;

// User Controllers

export const getInfo = async (data) => {
  try {
    return await axios.get(`${url}/instance/getInfo`, {
      headers: {
        Authentication: data.userId
      }
    });
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const ListInstance = async (data) => {
  try {
    return await axios.get(`${url}/instance/listIns`, {
      headers: {
        Authentication: data.userToken
      }
    });
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

export const getUserPicture = async (data) => {
  try {
    return await axios.get(
      `${url}/instance/downloadPfp?contactNumber=${data.contactNumber}`,
      {
        headers: {
          Authentication: data.userId,
        },
      }
    );
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

// Contacts Controllers

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
    return await axios.get(`${url}/contacts/consultContacts`, {
      headers: {
        Authentication: data.userToken,
      },
    });
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

// Automation Controllers

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


// Live Chat Controllers

export const sendMessage = async (data) => {
  try {
    return await axios.post(`${url}/livechat/newMessage`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendImage = async (data) => {
  try {
    return await axios.post(
      `${apiUrl}/message/image?key=${data.from}`,
      data.data
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendDoc = async (data) => {
  try {
    return await axios.post(
      `${apiUrl}/message/doc?key=${data.from}`,
      data.data
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendVid = async (data) => {
  try {
    return await axios.post(
      `${apiUrl}/message/video?key=${data.from}`,
      data.data
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const sendAudio = async (data) => {
  try {
    return await axios.post(
      `${apiUrl}/message/audio?key=${data.from}`,
      data.data
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getCurrentChat = async (data) => {
  try {
    return await axios.get(
      `${url}/livechat/getChat?from=${data.from}&to=${data.to}`
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getMessages = async (data) => {
  try {
    return await axios.get(`${url}/livechat/getMessages?chatId=${data.chatId}`);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getContactLastMessage = async (data) => {
  try {
    return await axios.get(
      `${url}/livechat/getLastMessage?from=${data.from}&to=${data.to}`
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const getUserStatus = async (data) => {
  try {
    return await axios.get(
      `${url}/contacts/getStatus?contactNumber=${data.contactNumber}`,
      {
        headers: {
          userId: data.userId,
        },
      }
    );
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

// Files Controllers

export const downloadFile = async (data) => {
  try {
    return await axios.post(`${url}/files/getImage`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error);
  }
};

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${url}/file/uploadFile`, data);
  } catch (error) {
    console.log("Error while calling newConversations API ", error);
  }
};

/*
  name: string,
  execution: number,
  ctr: number,
  user_token: string
*/
export const createFlow = async (data) => {
  try {
    return await axios.post(`${url}/flow/create`, data)
  } catch (error) {
    console.log("Error while calling createFlow API", error);
  }
}

// user_token
export const getFlows = async (data) => {
  try {
    return await axios.post(`${url}/flow/get`, data)
  } catch (error) {
    console.log("Error while calling getFlow API", error);
  }
}

/*
  user_token: string,
  nameFlow: string
*/
export const getOneFlow = async (data) => {
  try {
    return await axios.post(`${url}/flow/getOne`, data)
  } catch (error) {
    console.log("Error while calling getOneFlow API", error);
  }
}

/*
  nameFlow: string,   Nome do flow pra busca
  newName: string     Novo nome
*/

export const updateFlow = async (data) => {
  try {
    return await axios.post(`${url}/flow/update`, data)
  } catch (error) {
    console.log("Error while calling updateFlow API", error);
  }
}

/*
  user_token: string,
  nameFlow: string  Nome do flow q quer apagar
*/

export const deleteFlow = async (data) => {
  try {
    return await axios.post(`${url}/flow/delete`, data)
  } catch (error) {
    console.log("Error while calling deletFlow API", error);
  }
}



