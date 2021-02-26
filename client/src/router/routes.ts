import { RouteProps } from 'react-router-dom'
import Index from '../pages/Index'
import Login from '../pages/Auth/Login'
import Reginter from '../pages/Auth/Register'
import Browse from '../pages/Browse'
import Account from '../pages/Account'

export const routes: Array<CustomRouteProps> = [
  {
    path: '/',
    name: 'index',
    exact: true,
    requiresAuth: false,
    component: Index
  },

  {
    path: '/browse',
    name: 'browse',
    exact: false,
    requiresAuth: true,
    component: Browse
  },

  {
    path: '/account',
    name: 'account',
    exact: false,
    requiresAuth: true,
    component: Account
  },

  {
    path: '/login',
    name: 'login',
    exact: false,
    requiresAuth: false,
    component: Login
  },

  {
    path: '/register',
    name: 'register',
    exact: false,
    requiresAuth: false,
    component: Reginter
  }
]

export interface CustomRouteProps extends RouteProps {
  name: string;
  requiresAuth?: boolean;
}
