import { AuthState } from './auth.interface'

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  userData: null
}
