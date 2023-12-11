import axios from 'axios';

axios.defaults.baseURL = 'https://6519986e818c4e98ac608cb9.mockapi.io';

export const getAdverts = async () => {
  const response = await axios.get('/adverts');
  return response.data;
};
