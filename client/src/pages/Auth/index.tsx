import { useState } from 'react'
import './style.scss'

export default function AuthContainer () {
  // __STATE <React.Hooks>
  const [ value, setValue ] = useState(null)

  // __RENDER
  return (
    <div className="ui--auth ui--router-view">
      .ui--auth
    </div>
  )
}
