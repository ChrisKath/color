import axios, { AxiosInstance } from 'axios'
import { configs } from './configs'
import { getCookie } from './cookies'

/**
 * Create axios instance.
 */
const Axios: AxiosInstance = axios.create({
  baseURL: configs.API_BASE_URL,
  timeout: 32e2
})

/**
 * Axios also provides a request interceptor, allows changes to the request data before it is sent to the server
 * This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
 * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
 * FormData or Stream
 * You may modify the headers object.
 */
Axios.interceptors.request.use((requestConfig) => {
  const token = getCookie(configs.APP_AUTH)

  if (token) {
    requestConfig.headers.Authorization = `Bearer ${token}`
  }

  return requestConfig
})

/**
 * allows changes to the response data to be made before
 * it is passed to then/catch
 */
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    let message: string = error?.message || 'Something was wrong!!'
    alert(message)

    return Promise.reject({
      status: false,
      code: error?.code || 'ERR_UNKNOWN',
      message
    })
  }
)

export default Axios
