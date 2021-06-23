import { StoreTypes } from '@/store'

export default {
  getAppVersion({ core }: StoreTypes) {
    return core.appVersion
  },

  getLanguage({ core }: StoreTypes) {
    return core.lang
  },

  getLoader({ core }: StoreTypes) {
    return core.loader
  },

  getDialog({ core }: StoreTypes) {
    return core.dialog
  }
}
