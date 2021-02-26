import axios from 'src/configs/axios'
import { Token, User } from 'src/store/auth/auth.interface'
import { ResError } from '../types'
import { LoginProps } from './auth.interface'

export default {
  /**
   * Login service.
   * 
   * @param {object} payload
   */
  async login (payload: LoginProps): Promise<Token | ResError> {
    try {
      const response = await axios.post('/auth/login', payload)
      return response.data
    } catch (error) {
      return error
    }
  },

  /**
   * Login with google.
   */
  async loginWithGoogle (): Promise<any> {
    return undefined
  },

  /**
   * GET user profile.
   */
  async me (): Promise<User> {
    try {
      const response = await axios.get('/auth/profile')
      return response.data
    } catch (error) {
      return error
    }
  },
}
