import axios from 'axios';

axios.defaults.timeout = 5000;

const BASE_URL = import.meta.env.VITE_BASE_URL;

const baseInstance = axios.create({
  baseURL: BASE_URL,
});

export default baseInstance;
