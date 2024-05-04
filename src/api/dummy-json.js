import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getDummyJsonUsers = async () => {
  const result = await axiosInstance.get('users');
  return result.data;
};
