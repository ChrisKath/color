import cls from 'classnames'
import { OptionProps } from './index'

export interface ComponrntProps {
  options: OptionProps[];
  onSelect: Function;
}

export function OptionsComponent({ options, onSelect }: ComponrntProps) {
  // __RENDER
  return (
    <div className='ui--input-multiselect-options'>
      <ul className='ul'>
        {options.map((option, index) => (
          <li className={cls('li', { disabled: option.disabled })} key={index} onClick={() => onSelect(option.value)}>
            {option.label}
          </li>
        ))}

        {!options.length && <li className='li disabled'>Option not found.</li>}
      </ul>
    </div>
  )
}
