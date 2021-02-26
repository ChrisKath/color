import { AuthActionInterface, AuthActionTypes, Token, User } from './auth.interface'

export default {
  setAuthenticated (payload: boolean): AuthActionInterface {
    return {
      type: AuthActionTypes.SET_AUTH,
      payload
    }
  },

  setToken (payload: Token): AuthActionInterface {
    return {
      type: AuthActionTypes.SET_TOKEN,
      payload
    }
  },

  setUserData (payload: User): AuthActionInterface {
    return {
      type: AuthActionTypes.SET_USER,
      payload
    }
  }
}
