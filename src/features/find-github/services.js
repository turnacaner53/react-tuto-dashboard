import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getUser = async (username) => {
  const result = await axiosInstance.get(username);
  return result.data;
};

const useFindGithubUser = (username) => {
  return useQuery({
    queryKey: ['findGithubUser', username],
    queryFn: () => getUser(username),
  });
};

export default useFindGithubUser;
