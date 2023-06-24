import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
});
