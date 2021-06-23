export type AuthAction = AuthActionTypes
export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH_AUTHENTICATED',
  SET_USER = 'SET_AUTH_USER_PROFILE'
}

export interface AuthActionInterface {
  type: AuthAction;
  payload: any;
}

export interface AuthState {
  isAuthenticated: boolean;
  passport: string | null;
  user: any;
}
