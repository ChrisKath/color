import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Color from '../../assets/images/logo.svg'

export interface PropsType {
  isAuth?: boolean
}

export default function HeaderComponent (props: PropsType) {
  // __STATE <React.Hooks>
  const [sticky, setSticky] = useState(false)

  // __FUNCTION
  const setEventListener = () => {
    window.addEventListener('scroll', () => {
      setSticky(window.scrollY > 60)
    }, false)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    setEventListener()
  }, [])

  // __RENDER
  return (
    <header className={classNames('ui--header')}>
      {
        props.isAuth ? (
          <div className="ui--header-container">
            <div className="ui--header-menu">
              <NavLink className="ui--header-menu-link" to="/browse">home</NavLink>
              <NavLink className="ui--header-menu-link" to="/account">movies</NavLink>
              <NavLink className="ui--header-menu-link" to="/account">my playlist</NavLink>
            </div>
          </div>
        ) : (
          <div className="ui--header-container unlock">
            <NavLink className="ui--header-logo" to="/" exact>
              <img className="ui--header-logo-img" src={Color} />
            </NavLink>

            <NavLink className="ui--header-menu-login" to="/login">sign in</NavLink>
          </div>
        )
      }
    </header>
  )
}
