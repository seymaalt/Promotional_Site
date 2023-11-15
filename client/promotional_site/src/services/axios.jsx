// axios.js dosyanıza ekleyin
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      AuthContext.logout();
      window.location.href ="/";
    }
    return Promise.reject(error);
  }
);

export default instance;
