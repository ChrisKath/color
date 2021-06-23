import { ConfigProps, ConfigPropsType } from '@/types/config'

export const configs: ConfigPropsType<any> = {
  APP_MODE: process.env.NODE_ENV,
  APP_NAME: process.env.NEXT_PUBLIC_NAME,
  WEB_TITLE: process.env.NEXT_PUBLIC_WEB_TITLE,
  APP_CLIENT_SIDE: process.browser,

  // XMLHttpRequest (XHR)
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  API_SECRET_KEY: process.env.NEXT_PUBLIC_API_SECRET_KEY,

  // STORAGE KEY-NAME
  APP_AUTH: 'APP.PassportToken',
  APP_USER: 'APP.UserInfo',
  APP_LANG: 'APP.Language',

  // REQUEST HEADERS
  AUTH_TOKEN: 'Authorization',
  CONTENT_LANG: 'Content-Language',
  XSRF_TOKEN: 'XSRF-TOKEN',
  X_CSRF_TOKEN: 'X-CSRF-TOKEN'
}

export const isDev: boolean = configs.APP_MODE === 'development'
export const isProduction: boolean = configs.APP_MODE === 'production'
export const isBrowser: boolean = configs.APP_CLIENT_SIDE || typeof window !== 'undefined'

export function getConfig(keyName: ConfigProps): any {
  return configs[keyName]
}
