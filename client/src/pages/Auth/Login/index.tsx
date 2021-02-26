import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCookie } from 'tiny-cookie'
import classNames from 'classnames'
import { InputComponent, LogoComponent } from 'src/components/exports'
import configs from 'src/configs'
import authService from 'src/services/auth/auth.service'
import { authActions } from 'src/store/exports'
import { Token } from 'src/store/auth/auth.interface'
import google from 'src/assets/images/google.svg'
import './style.scss'

export default function LoginContainer () {
  // __STATE <React.Hooks>
  const dispatch = useDispatch()
  const [state, setState] = useState({
    username: '',
    password: '',
    remember: false
  })

  // __FUNCTION
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const response = await authService.login(state)
    if ('accessToken' in response) {
      setCookieToken(response)

      const user = await authService.me()
      dispatch(authActions.setUserData(user))

      setTimeout(() => {
        dispatch(authActions.setAuthenticated(true))
        dispatch(authActions.setToken(response))
      }, 2e3)
    } else {
      alert(response.message)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setState({ ...state, [field]: value })
  }

  const setCookieToken = (value: Token) => {
    if (state.remember) {
      setCookie(configs.APP_AUTH, value.accessToken, {
        expires: value.expiresIn
      })
    } else {
      setCookie(configs.APP_AUTH, value.accessToken)
    }
  }

  // __RENDER
  return (
    <div className="ui--login ui--router-view">
      <div className="ui--login-header">
        <LogoComponent />
      </div>

      <div className="ui--login-body">
        <form className="ui--login-form" onSubmit={handleSubmit}>
          <h2 className='title'>sign in</h2>

          <InputComponent
            label="Email or phone number"
            value={state.username}
            onChange={(value: string) => handleChange('username', value)}
          />

          <InputComponent
            type="password"
            label="Password"
            value={state.password}
            onChange={(value: string) => handleChange('password', value)}
          />

          <div className="ui--input">
            <button type="submit" className="btn btn-primary btn-login">sign in</button>
          </div>

          <div className="help">
            <div className={classNames('remember', { active: state.remember })} onClick={() => handleChange('remember', !state.remember)}>
              <svg className="icon bi bi-check" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
              </svg>
              <span className="text">Remember me</span>
            </div>

            <a className="btn btn-default btn-help">Need Help?</a>
          </div>
        </form>

        <div className="ui--login-other">
          <div className="rows">
            <button type="button" className="btn btn-default btn-google">
              <img className="icon" src={google} />
              <span className="text">Login with Google</span>
            </button>
          </div>

          <div className="rows">
            <div className="register">
              New to Color? <NavLink className="link" to="/register">Sign up now</NavLink>.
            </div>
          </div>

          <div className="rows">
            <p className="captcha">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
