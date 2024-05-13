import axios from 'axios';

const BASE_URL = 'http://localhost:9090/api/blogs/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getBlog = async (id) => {
  const result = await axiosInstance.get(id);
  return result.data;
};

export const getAllBlogs = async () => {
  const result = await axiosInstance.get();
  return result.data;
};

export const createBlog = async (blog) => {
  const result = await axiosInstance.post('create', blog);
  return result.data;
};

export const updateBlog = async (id, blog) => {
  const result = await axiosInstance.put(`update/${id}`, blog);
  return result.data;
};

export const deleteBlog = async (id) => {
  await axiosInstance.delete(`delete/${id}`);
  return null;
};
