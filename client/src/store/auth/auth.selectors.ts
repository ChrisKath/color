import { ReduxStateType } from '../index'

export default {
  getAuthenticated (state: ReduxStateType) {
    return state.$auth.isAuthenticated
  },

  getToken (state: ReduxStateType) {
    return state.$auth.token
  },

  getUserData (state: ReduxStateType) {
    return state.$auth.userData
  }
}
