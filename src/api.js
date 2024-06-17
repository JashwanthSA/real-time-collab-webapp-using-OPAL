import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const saveDocument = async (user, document) => {
  return api.post('/document', { user, document });
};
