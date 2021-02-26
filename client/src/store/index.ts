import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import $core from './core/core.reducer'
import $auth from './auth/auth.reducer'

const reducer = combineReducers({
  $core,
  $auth
})

export type ReduxStateType = ReturnType<typeof reducer>

export default createStore(reducer, /* preloadedState, */ devToolsEnhancer({}))
