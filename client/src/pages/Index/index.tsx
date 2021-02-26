import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LogoComponent } from 'src/components/exports'
import './style.scss'

export default function IndexContainer () {
  // __STATE <React.Hooks>
  const [email, setEmail] = useState('')

  // __FUNCTIONS
  const handleChange = (event: any) => {
    setEmail(event.target.value)
  }

  // __RENDER
  return (
    <div className="ui--index ui--router-view">
      <div className="ui--index-header">
        <LogoComponent />
        <NavLink className="btn btn-primary btn-login" to="/login">sign in</NavLink>
      </div>
      
      <div className="ui--index-body">
        <div className="ui--index-hero">
          <h1 className="h1">Unlimited movies, TV shows, and more.</h1>
          <h2 className="h2">Watch anywhere. Cancel anytime.</h2>
          <h4 className="h4">Ready to watch? Enter your email to create or restart your membership.</h4>
          
          <div className="start">
            <input type="text" placeholder="Email Address" onChange={handleChange} />
            <button type="button" className="btn btn-primary">get started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
