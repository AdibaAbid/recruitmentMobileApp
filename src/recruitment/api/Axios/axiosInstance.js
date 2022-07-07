import axios from 'axios';
import { API_URL } from './config';

let axiosInstance = axios.create({
  baseURL: API_URL,
});

//This allows you to intercept the request before it is sent and alter headers or anyting else that is passed to the axios config.
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    //console.log('Interceptor Request Error' + error);
  },
);

//This allows you to intercept the response and check the status and error messages and if ncessary reject the promise.
axiosInstance.interceptors.response.use(
  response => {
    //console.log(response.data);
    return response.data;
  },
  error => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  },
);

export default axiosInstance;
