import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'

export default function LogoComponent () {
  // __RENDER
  return (
    <NavLink className="ui--logo" to="/" exact>
      <img className="ui--logo-img" src={Logo} />
    </NavLink>
  )
}
