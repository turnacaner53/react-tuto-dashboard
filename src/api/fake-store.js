import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getProducts = async () => {
  const result = await axiosInstance.get('products');
  return result.data;
};
