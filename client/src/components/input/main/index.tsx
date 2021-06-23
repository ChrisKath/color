import { useState } from 'react'
import { InputProps } from '@/types/input'
import { getErrors } from '../utils'
import cls from 'classnames'

export function Input({ name, register, rules, errors, ...props }: InputProps) {
  // __STATE <React.Hooks>
  const [type, setType] = useState(props.type || 'text')
  const defaultValue = String(props.value || '')
  const isPassword = props.type === 'password'

  // __FUNCTIONS
  const handleSwitchType = (): void => {
    if (isPassword) {
      setType(type === 'text' ? 'password' : 'text')
    }
  }

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <label className={cls('ui--input-label', { required: Boolean(rules?.required) })} htmlFor={props.vid}>
        {props.icon && <span className={cls('icon', 'bi', `bi-${props.icon}`)}></span>}
        <span className='text'>{props.label}</span>
      </label>

      <div className='ui--inout-desc'>{props.desc}</div>

      <div className='ui--input-field'>
        <input
          type={type}
          id={props.vid}
          name={name}
          defaultValue={defaultValue}
          autoComplete={props.autocomplete}
          placeholder={props.placeholder}
          maxLength={props.maxlength}
          disabled={props.disabled}
          {...register(name, rules)}
        />

        {isPassword && (
          <a
            className={cls('icon', 'bi', {
              'bi-eye': type === 'password',
              'bi-eye-slash': type === 'text'
            })}
            onClick={handleSwitchType}
          ></a>
        )}
      </div>

      <span className='ui--input-errors'>{getErrors(errors)}</span>
    </div>
  )
}
