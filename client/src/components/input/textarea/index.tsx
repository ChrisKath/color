import { InputProps } from '@/types/input'
import { getErrors } from '../utils'
import cls from 'classnames'

export function Textarea({ name, value, register, required, ...props }: InputProps) {
  // __STATE <React.Hooks>
  const defaultValue = String(value || '')

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <label className={cls('ui--input-label', { required })} htmlFor={props.vid}>
        {props.icon && <span className={cls('icon', 'bi', `bi-${props.icon}`)}></span>}
        <span className='text'>{props.label}</span>
      </label>

      <div className='ui--input-desc'>{props.desc}</div>

      <textarea
        id={props.vid}
        name={name}
        className='ui--input-textarea'
        defaultValue={defaultValue}
        placeholder={props.placeholder}
        maxLength={props.maxlength}
        readOnly={props.readonly}
        disabled={props.disabled}
        ref={register({ required })}
      />

      <span className='ui--input-errors'>{getErrors(props.errors)}</span>
    </div>
  )
}
