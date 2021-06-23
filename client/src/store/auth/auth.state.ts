import { configs } from '@/libs/configs'
import { getCookie } from '@/libs/cookies'
import { AuthState } from './auth.interface'

const getPassport = getCookie(configs.APP_AUTH)

export const initialState: AuthState = {
  isAuthenticated: Boolean(getPassport),
  passport: getPassport || null,
  user: null
}
