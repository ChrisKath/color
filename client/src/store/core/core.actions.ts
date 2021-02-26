import { CoreLoaderState, CoreActionInterface, CoreActionTypes } from './core.interface'

export default {
  setLanguage (payload: string): CoreActionInterface {
    return {
      type: CoreActionTypes.SET_LANG,
      payload: payload
    }
  },

  setLoader (status: boolean = true, text: string = 'rendering...'): CoreActionInterface {
    return {
      type: CoreActionTypes.SET_LOADER,
      payload: { status, text }
    }
  }
}
