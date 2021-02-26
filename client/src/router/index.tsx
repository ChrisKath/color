import { lazy } from 'react'
import { useSelector } from 'react-redux'
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CustomRouteProps, routes } from './routes'
import { authSelector } from '../store/exports'

export default function RouterProvider () {
  return (
    <Switch>
      {
        routes.map((route: CustomRouteProps, index: number) => (
          <RouterGuard
            key={index}
            name={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
            requiresAuth={route.requiresAuth}
          />
        ))
      }

      <Route path="*" component={() => <Redirect to="/" />} />
    </Switch>
  )
}

/**
 * A wrapper for <Route> that redirects to the login
 * screen if you're not yet authenticated.
 */
export function RouterGuard ({ name, requiresAuth, ...props }: CustomRouteProps) {
  const isAuthenticated = useSelector(authSelector.getAuthenticated)

  if (isAuthenticated && /index|login|register/i.test(name)) {
    return <Redirect to="/browse" />
  }

  return (requiresAuth && !isAuthenticated)
    ? <Redirect to="/login" />
    : <Route {...props} />
}

export function useLazy (pathName: string) {
  return lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import(`../pages${pathName}`)), 2e3)
    })
  })
}
