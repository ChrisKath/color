import { useRef, useState, useEffect } from 'react'
import { FieldError, RegisterOptions } from 'react-hook-form'
import cls from 'classnames'
import { generateId, lowerCase } from '@/utils'
import { OptionsComponent } from './options'

export interface ComponentProps {
  name: string;
  label?: string;
  desc?: string;
  value?: string[];
  register: Function;
  errors?: FieldError;
  options: OptionProps[];
  max?: number;
  rules?: RegisterOptions;
  onChange?: Function;
}

export interface OptionProps {
  id?: string | number;
  label: string;
  value: string;
  disabled?: boolean;
}

export function MultiSelectProvider({ name, label, value, options, ...props }: ComponentProps) {
  // __STATE <React.Hooks>
  const [selected, setSelected] = useState(value || [])
  const [active, setActive] = useState(false)
  const [search, setSearch] = useState('')
  const vid = generateId()

  // prettier-ignore
  const elmRef = useRef<HTMLDivElement>(null)

  // prettier-ignore
  const inputRef = useRef<HTMLInputElement>(null)

  // __EFFECTS <React.Hooks>
  useEffect(() => {
    window.addEventListener('click', (event: any) => {
      if (event.target.contains(elmRef.current)) {
        setActive(false)
      }
    })
  }, [])

  // __FUNCTIONS
  const handleSelecter = (value: string, action?: string): void => {
    let results = []

    if (action === 'rm') {
      results = selected.remove('', value)
    } else {
      if (selected.length >= (props.max || 5)) return void 0
      results = [...selected, value]
    }

    setSelected(results)
    setSearch('')
  }

  const handleSearch = (event: any): void => {
    let getValue: string = event.target.value
    setSearch(getValue)
  }

  const handleKeydown = (event: any): void => {
    let { key, keyCode } = event

    if (key === 'Enter' && keyCode === 13) {
      let getValue: string = event.target.value

      event.preventDefault()
      handleSelecter(getValue.trim())
    }
  }

  const handleSetActive = (): void => {
    setActive(true)
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }

  // __COMPUTED
  const getOptions = (): OptionProps[] => {
    let results = options
    let searchValue = lowerCase(search)

    return results.filter((option) => {
      let val = lowerCase(option.value)
      return val.includes(searchValue) && !selected.includes(val)
    })
  }

  // __RENDER
  return (
    <div className='ui--input-provider' ref={elmRef}>
      <label className={cls('ui--input-label', { required: Boolean(props?.rules?.required) })} htmlFor={vid}>
        {label}
      </label>

      <div className='ui--input-desc'>{props.desc}</div>

      <div className='ui--input-multiselect' onClick={handleSetActive}>
        <div className='lists'>
          {selected.map((label, index) => (
            <div className='li' key={index}>
              <span className='text'>{label}</span>
              <span className='icon bi bi-x' onClick={() => handleSelecter(label, 'rm')}></span>
            </div>
          ))}

          <input
            type='text'
            id={vid}
            ref={inputRef}
            value={search}
            maxLength={8}
            autoComplete='off'
            onChange={handleSearch}
            onKeyDown={handleKeydown}
            onFocus={handleSetActive}
          />
        </div>

        <div hidden>
          <input type='checkbox' name={name} ref={props.register(props.rules)} readOnly />

          {selected.map((a, b) => (
            <input
              type='checkbox'
              key={b}
              name={name}
              value={a}
              ref={props.register(props.rules)}
              defaultChecked={true}
              readOnly
            />
          ))}
        </div>
      </div>

      {active && <OptionsComponent options={getOptions()} onSelect={handleSelecter} />}

      {props.errors && <span className='ui--input-errors'>Please field is required.</span>}
    </div>
  )
}
