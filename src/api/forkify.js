import axios from 'axios';

const BASE_URL = 'https://forkify-api.herokuapp.com/api/v2/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getRecipes = async (search) => {
  const result = await axiosInstance.get(`recipes?search=${search}`);
  return result.data
};

export const getRecipe = async (id) => {
  const result = await axiosInstance.get(`recipes/${id}`);
  return result.data.data.recipe;
}