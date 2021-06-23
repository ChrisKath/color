import { FieldError } from 'react-hook-form'
import { isUndefined } from '@/utils'

export const getErrors = (errors?: FieldError): string | null => {
  if (isUndefined(errors)) return null
  let results: any = ''

  switch (errors?.type) {
    case 'required':
      results = errors?.message || 'Please field is required.'
      break

    default:
      results = errors?.message
      break
  }

  return results
}
