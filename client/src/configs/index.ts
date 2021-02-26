export default {
  APP_MODE: process.env.NODE_ENV,
  APP_NAME: process.env.REACT_APP_NAME,
  WEB_TITLE: process.env.REACT_APP_WEB_TITLE,

  // XMLHttpRequest (XHR)
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  API_SECRET_KEY: process.env.REACT_APP_API_SECRET_KEY,

  // STORAGE KEY-NAME
  APP_AUTH: 'APP.SmartToken',
  APP_USER: 'APP.UserInfo',
  APP_LANG: 'APP.Language',

  // REQUEST HEADERS
  AUTH_TOKEN: 'Authorization',
  CONTENT_LANG: 'Content-Language',
  XSRF_TOKEN: 'XSRF-TOKEN',
  X_CSRF_TOKEN: 'X-CSRF-TOKEN'
}
