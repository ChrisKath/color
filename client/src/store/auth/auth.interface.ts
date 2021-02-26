export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTHENTICATED',
  SET_TOKEN = 'SET_TOKEN',
  SET_USER = 'SET_USERDATA'
}

export type AuthAction = AuthActionTypes
export interface AuthActionInterface {
  type: AuthAction;
  payload: any;
}

export interface AuthState {
  isAuthenticated?: boolean;
  token?: Token | null;
  userData?: User | null;
}

export interface User {
  id: number;
  displayName?: string;
  email: string;
  phone?: string | number;
  profile?: Profile | null;
  isActive?: boolean | number;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface Profile {
  id: number;
  role?: number | string;
  level?: number;
  picture?: string | null;
  contact?: any;
  additional?: any;
}

export interface Token {
  type: string;
  accessToken: string;
  expiresIn?: string | number;
}
