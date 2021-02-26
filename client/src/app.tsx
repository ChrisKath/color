import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { getCookie } from 'tiny-cookie'
import configs from './configs'
import RouterProvider from './router'
import {
  HeaderComponent,
  LoaderComponent,
  ParallaxComponent
} from './components/exports'
import {
  coreActions, coreSelector,
  authActions, authSelector
} from './store/exports'
import authService from './services/auth/auth.service'

export default function Application () {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const loader = useSelector(coreSelector.getLoader)
  const isAuthenticated = useSelector(authSelector.getAuthenticated)

  // __FUNCTION
  const setUserAuth = async () => {
    let accessToken = getCookie(configs.APP_AUTH)
    if (accessToken) {
      const user = await authService.me()
      dispatch(authActions.setUserData(user))
      dispatch(authActions.setAuthenticated(true))
      dispatch(authActions.setToken({ type: 'Bearer', accessToken }))
      loaderOff(2e3)
    } else {
      loaderOff(2e3)
    }
  }

  const loaderOff = (time: number) => {
    setTimeout(() => {
      dispatch(coreActions.setLoader(false))
    }, time)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    setUserAuth()
  }, [])

  // __RENDER
  return (
    <div className="ui--wrapper">
      <Router>
        {
          isAuthenticated
            ? <HeaderComponent isAuth={isAuthenticated} />
            : null
        }

        <ParallaxComponent />

        {
          loader.status
            ? <LoaderComponent {...loader} />
            : <RouterProvider />
        }
      </Router>
    </div>
  )
}
