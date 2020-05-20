import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    if(getToken()) {
      config.headers['Authorization'] = getToken()
    }
    if(process.env.NODE_ENV === 'development') {
      config.headers['Tenant'] = process.env.VUE_APP_MALL_ID
    } else {
      config.headers['Tenant'] = window.location.host.split('.')[0]
    }
    return config
  },
  error => {
    return Promise.error(error)
})
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
