import { AuthState, AuthActionTypes, AuthActionInterface } from './auth.interface'
import { initialState } from './auth.state'

export default function AuthReducer(state = initialState, action: AuthActionInterface): AuthState {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return {
        ...state,
        isAuthenticated: Boolean(action.payload),
        passport: action.payload
      }

    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}
