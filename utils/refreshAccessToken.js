import axios from 'axios'
import { logout } from './routes'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, REFRESH_ENDPOINT, BASE_URL } from './types'

export default async function RefreshAccessToken() {
  var data = JSON.stringify({
    refresh: localStorage.getItem(REFRESH_TOKEN_KEY),
  })
  let config = {
    method: 'post',
    url: `${BASE_URL}${REFRESH_ENDPOINT}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  try {
    let result = await axios(config)
    if (result.data.access) {
      localStorage.setItem(ACCESS_TOKEN_KEY, result.data.access)
      return result.data.access
    }
  } catch (e) {
    logout();
  }
}