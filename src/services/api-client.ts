import axios, { CanceledError, type AxiosRequestConfig } from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export { apiInstance, CanceledError, AxiosRequestConfig };
