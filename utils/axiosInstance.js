import {
  ACCESS_TOKEN_KEY,
  BASE_URL,
  REFRESH_ENDPOINT,
  REFRESH_TOKEN_KEY,
} from './types';

import RefreshAccessToken from './refreshAccessToken';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);
    config.headers = {
      Authorization: `JWT ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await RefreshAccessToken();
      axios.defaults.headers.common['Authorization'] = 'JWT ' + access_token;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
