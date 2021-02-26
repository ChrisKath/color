import { useState, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import userService from 'src/services/user/user.service'
import {
  InputComponent,
  LogoComponent
} from 'src/components/exports'
import './style.scss'

export default function RegisterContainer () {
  // __STATE <React.Hooks>
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  // __FUNCTION
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const response = await userService.register(state)
    if (response.status) {
      console.log(response)
    } else {
      alert(response.message)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setState({ ...state, [field]: value })
  }

  // __RENDER
  return (
    <div className="ui--register ui--router-view">
      <div className="ui--register-header">
        <LogoComponent />
      </div>

      <div className="ui--register-body">
        <form className="ui--register-form" onSubmit={handleSubmit}>
          <h2 className='title'>sign up</h2>
          <h4 className="desc">
            Just a few more steps and you're done!<br/>
            We hate paperwork, too.
          </h4>

          <InputComponent
            label="Email Address"
            value={state.email}
            onChange={(value: string) => handleChange('email', value)}
          />

          <InputComponent
            type="password"
            label="Password"
            value={state.password}
            onChange={(value: string) => handleChange('password', value)}
          />

          <div className="ui--input">
            <button type="submit" className="btn btn-primary btn-register">continue</button>
          </div>
        </form>

        <div className="ui--register-other">
          &larr; Back to <NavLink className="link" to="/login">Sign In</NavLink>
        </div>
      </div>
    </div>
  )
}
