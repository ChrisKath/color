import { CoreState, CoreActionTypes, CoreActionInterface } from './core.interface'
import { initialState } from './core.state'

export default (state = initialState, action: CoreActionInterface): CoreState => {
  switch (action.type) {
    case CoreActionTypes.SET_LANG:
      return {
        ...state,
        lang: action.payload
      }

    case CoreActionTypes.SET_LOADER:
      return {
        ...state,
        loader: action.payload
      }

    default:
      return state
  }
}
