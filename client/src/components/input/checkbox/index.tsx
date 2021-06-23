import { InputProps } from '@/types/input'

export function Checkbox({ name, register, ...props }: InputProps) {
  // __STATE <React.Hooks>
  const defaultChecked = Boolean(props.value)

  // __RENDER
  return (
    <div className='ui--input-provider'>
      <input
        type='checkbox'
        id={props.vid}
        name={name}
        className='ui--input-checkbox'
        defaultChecked={defaultChecked}
        {...register(name)}
      />

      <label className='ui--input-checkbox-label' htmlFor={props.vid}>
        <span className='icon bi bi-check'></span>
        <span className='text'>{props.label}</span>
      </label>
    </div>
  )
}
