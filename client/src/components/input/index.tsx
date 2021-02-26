import { useState } from 'react'
import classNames from 'classnames'

export interface PropsType {
  id?: string;
  type?: string;
  name?: string;
  label: string;
  value: string;
  onChange?: Function;
  onBlur?: Function;
}

export default function InputComponent (props: PropsType) {
  // __STATE <React.Hooks>
  const [error, setError] = useState(false)
  const type: string = (props.type || 'text')

  // __FUNCTION
  const onChange = (event: any): void => {
    if (props.onChange) {
      let { value } = event.target
      props.onChange(value)
    }
  }

  const onBlur = (event: any): void => {
    let { value } = event.target

    setError(!value)

    if (props.onBlur) {
      props.onBlur(value)
    }
  }

  // __RENDER
  return (
    <div className="ui--input">
      <div className={classNames('ui--input-field', { has: props.value })}>
        <input className="input" type={type} value={props.value} onChange={onChange} onBlur={onBlur} />
        <label className="label">{ props.label }</label>
      </div>

      {
        error
          ? (<span className="ui--input-error">Please field is required.</span>)
          : null
      }
    </div>
  )
}
