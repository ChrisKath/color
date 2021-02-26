import axios, { AxiosInstance } from 'axios'
import { getCookie } from 'tiny-cookie'
import config from './index'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 4e3
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use(requestConfig => {
  const token: string | null = getCookie(config.APP_AUTH)

  if (token) {
    requestConfig.headers[config.AUTH_TOKEN] = `Bearer ${token}`
  }
  
  return requestConfig
})

/**
 * allows changes to the response data to be made before
 * it is passed to then/catch
 */
Axios.interceptors.response.use(
  response => response,
  error => {
    console.error(error)
    return Promise.reject({
      status: false,
      code: error?.code || 'ERR_UNKNOWN',
      message: error?.message || 'Something was wrong!!'
    })
  }
)

export default Axios
