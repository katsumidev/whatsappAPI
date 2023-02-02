import axios from 'axios';

const url = process.env.REACT_APP_URL;

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/uploadFile`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}