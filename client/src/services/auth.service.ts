import axios from '@/libs/axios'
import { configs } from '@/libs/configs'
import { setCookie, removeCookie } from '@/libs/cookies'
import { dispatch, authActions } from '@/store'
import { FormLogin } from '@/types/forms'

export const authService = {
  /**
   * Login service.
   *
   * @param {FormLogin} params
   */
  async login(params: FormLogin): Promise<any> {
    try {
      const response = await axios.post('/auth/login', params)

      if (response.status) {
        const { accessToken, expiresDate } = response.data

        setCookie(configs.APP_AUTH, accessToken, {
          domain: location.hostname,
          expires: params.remember ? new Date(expiresDate) : void 0
        })

        dispatch(authActions.setAuthenticated(accessToken))
      }

      return response.data
    } catch (error) {
      return error
    }
  },

  /**
   * Login with google.
   */
  async loginWithGoogle(): Promise<any> {
    return void 0
  },

  /**
   * Login with facebook.
   */
  async loginWithFacebook(): Promise<any> {
    return void 0
  },

  /**
   * Login with line.
   */
  async loginWithLine(): Promise<any> {
    return void 0
  },

  /**
   * GET user profile.
   */
  async getUserProfile(): Promise<any> {
    try {
      const response = await axios.get('/auth/profile')
      return response.data
    } catch (error) {
      return error
    }
  },

  async logout(): Promise<void> {
    await axios.get('/auth/logout')
    removeCookie(configs.APP_AUTH)
    location.reload()
  }
}
