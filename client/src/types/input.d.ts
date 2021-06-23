import { FieldError, UseFormRegister, RegisterOptions } from 'react-hook-form'

export type InputProps = {
  key: string,
  vid?: string,
  type?: 'text' | 'number' | 'search' | 'email' | 'password' | 'checkbox' | 'textarea',
  name: string,
  label: string,
  icon?: string,
  desc?: string,
  value?: string | boolean,
  register: UseFormRegister,
  errors?: FieldError,
  rules?: RegisterOptions,
  autocomplete?: string,
  placeholder?: string,
  maxlength?: number,
  disabled?: boolean,
  readonly?: boolean,
  required?: boolean
}
