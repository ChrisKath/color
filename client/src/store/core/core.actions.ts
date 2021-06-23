import { CoreActionInterface, CoreActionTypes, Loader, Dialog } from './core.interface'

export default {
  setLanguage(payload: string): CoreActionInterface {
    return {
      type: CoreActionTypes.SET_LANG,
      payload
    }
  },

  setLoader(payload: Loader): CoreActionInterface {
    return {
      type: CoreActionTypes.SET_LOADER,
      payload
    }
  },

  setDialog(payload: Dialog): CoreActionInterface {
    return {
      type: CoreActionTypes.SET_DIALOG,
      payload: {
        ...payload,
        type: payload?.type || 'alert',
        confirmLabel: payload?.confirmLabel || 'OK',
        cancelLabel: payload?.cancelLabel || 'cancel'
      }
    }
  }
}
