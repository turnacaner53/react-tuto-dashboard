import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getCurrentWeather = async (search) => {
  const result = await axiosInstance.get(
    `weather?q=${search}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
  );
  return result.data;
};

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
