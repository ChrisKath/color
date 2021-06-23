import { InputProps } from '@/types/input'
import { Input } from './main'
import { Textarea } from './textarea'
import { Checkbox } from './checkbox'

export default function InputProvider(props: InputProps) {
  // __STATE <React.Hooks>
  const vid: string = `ui--form-model-${props.name}`

  // __RENDER
  switch (props.type) {
    case 'checkbox':
      return <Checkbox vid={vid} {...props} />

    case 'textarea':
      return <Textarea vid={vid} {...props} />

    default:
      return <Input vid={vid} {...props} />
  }
}
