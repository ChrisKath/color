import { StoreTypes } from '@/store'

export default {
  getAuthenticated({ auth }: StoreTypes) {
    return auth.isAuthenticated
  },

  getPassport({ auth }: StoreTypes) {
    return auth.passport
  },

  getUser({ auth }: StoreTypes) {
    return auth.user
  }
}
