import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;;

export const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
