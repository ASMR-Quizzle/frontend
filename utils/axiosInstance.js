import axios from 'axios'
import RefreshAccessToken from './refreshAccessToken'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REFRESH_ENDPOINT, BASE_URL } from './types'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const access_token = localStorage.getItem(ACCESS_TOKEN_KEY)
    config.headers = {
      Authorization: `JWT ${access_token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const access_token = await RefreshAccessToken()
      axios.defaults.headers.common['Authorization'] = 'JWT ' + access_token
      return axiosInstance(originalRequest)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance