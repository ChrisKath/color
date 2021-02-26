import { ReduxStateType } from '../index'

export default {
  getAppVersion (state: ReduxStateType) {
    return state.$core.appVersion
  },

  getLanguage (state: ReduxStateType) {
    return state.$core.lang
  },

  getLoader (state: ReduxStateType) {
    return state.$core.loader
  }
}
