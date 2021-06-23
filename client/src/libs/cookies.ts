import JSCookies, { CookieAttributes } from 'js-cookie'

export const cookies = JSCookies

export function getCookie(name: string) {
  return JSCookies.get(name)
}

export function setCookie(name: string, value: string, options?: CookieAttributes) {
  return JSCookies.set(name, value, options)
}

export function removeCookie(name: string, options?: CookieAttributes) {
  return JSCookies.remove(name, options)
}
