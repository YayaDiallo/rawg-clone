import axios, { CanceledError } from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

export { apiInstance, CanceledError };
