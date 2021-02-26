import { AuthState, AuthActionTypes, AuthActionInterface } from './auth.interface'
import { initialState } from './auth.state'

export default (state = initialState, action: AuthActionInterface): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      }

    case AuthActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    case AuthActionTypes.SET_USER:
      return {
        ...state,
        userData: action.payload
      }

    default:
      return state
  }
}
