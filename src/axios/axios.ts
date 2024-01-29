import axios from 'axios';
// import { baseURL } from './axiosUtils';

export const baseURL = 'http://localhost:8779/';

export const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
