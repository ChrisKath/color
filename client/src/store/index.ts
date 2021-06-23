import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { isDev } from '@/libs/configs'
import core from './core/core.reducer'
import auth from './auth/auth.reducer'

const reducer = combineReducers({
  core,
  auth
})

const setMiddleware = (middleware: any[]) => {
  const StoreEnhancer = applyMiddleware(...middleware)
  return isDev ? composeWithDevTools(StoreEnhancer) : StoreEnhancer
}

const createReduxStore = createStore(reducer, setMiddleware([thunkMiddleware]))

export default createReduxStore
export type StoreTypes = ReturnType<typeof reducer>
export const { dispatch } = createReduxStore
export { useDispatch, useSelector } from 'react-redux'
export { default as authActions } from './auth/auth.actions'
export { default as authSelector } from './auth/auth.selectors'
export { default as coreActions } from './core/core.actions'
export { default as coreSelector } from './core/core.selectors'
