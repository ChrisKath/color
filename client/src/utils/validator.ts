import { isEmpty, isArray } from '@/utils'

export const digitsValidator = (message?: string) => {
  return {
    value: /^[0-9]+$/,
    message: message || 'The field must be numeric only.'
  }
}

export const phoneValidator = (message?: string) => {
  return {
    value: /^\+?[0-9]{3,18}$/,
    message: message || 'The field must be a valid phone number.'
  }
}

export const emailValidator = (message?: string) => {
  return {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: message || 'The field must be a valid email.'
  }
}

export const confirmPasswordValidator = (watch: Function, value: string): boolean | string => {
  return value === watch('password') || 'Password confirmation does not match.'
}

export const imageValidator = (files: any, message?: string): boolean | string => {
  if (isEmpty(files)) return true

  let regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i
  let text = 'The field must be an image.'

  if (isArray(files)) {
    return (files.every((file: File) => regex.test(file.name)) && message) || text
  }

  return (regex.test(files.name) && message) || text
}
