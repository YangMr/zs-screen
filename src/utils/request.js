import axios from 'axios'
import { getCookie } from '@/utils/auth.js'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    // 将token通过请求头发送给后台
    const token = getCookie()
    if (token) {
      config.headers.Authorization = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default request
