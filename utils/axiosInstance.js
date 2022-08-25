import axios from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REFRESH_ENDPOINT } from './types';

const baseUrl = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
  headers: {
    Authorization: sessionStorage.getItem(ACCESS_TOKEN_KEY)
      ? 'JWT ' + sessionStorage.getItem(ACCESS_TOKEN_KEY)
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json'
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const orignalRequest = error.config;

    if (typeof error.response === 'undefined') {
      alert(
        'A Server Error has occured. Please try again later'
      );

      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      orignalRequest.url === baseUrl + REFRESH_ENDPOINT
    ) {
      window.location.href = '/login';
      return Promise.reject(error);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
			error.response.status === 401 &&
			error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post(REFRESH_ENDPOINT, {
              refresh: refreshToken
            })
            .then((response) => {
              localStorage.setItem(ACCESS_TOKEN_KEY, response.data.access);
              localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refresh);

              axiosInstance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
              orignalRequest.headers['Authorization'] = 'JWT ' + response.data.access;

              return axiosInstance(orignalRequest);
            })
            .catch((err) => {
              console.log(err);
            })
        } else {
          window.location.href = '/login';
        }
      } else {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
)

export default axiosInstance;