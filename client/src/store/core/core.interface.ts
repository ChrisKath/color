export interface CoreState {
  appVersion: string;
  lang: string;
  loader: CoreLoaderState;
}

export interface CoreLoaderState {
  status: boolean;
  text: string;
}

export enum CoreActionTypes {
  SET_LANG    = 'SET_LANGUAGE',
  SET_LOADER  = 'SET_LOADER'
}

export type CoreAction = CoreActionTypes

export interface CoreActionInterface {
  type: CoreAction;
  payload: any;
}
