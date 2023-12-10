import axios from 'axios';

axios.defaults.baseURL = 'https://6519986e818c4e98ac608cb9.mockapi.io';
const page = 1;
const limit = 12;

export const getAdverts = async () => {
  const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
  return response.data;
};
