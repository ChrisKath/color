import { useState, ChangeEvent } from 'react'

export default function HomeContainer() {
  // __STATE <React.Hooks>
  const [state, setState] = useState('')

  // __FUNCTIONS
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState(target.value)
  }

  // __RENDER
  return (
    <div className='ui--home router-view'>
      {/* <div className='ui--home-header'>
        <LogoComponent />
        <NavLink className='btn btn-primary btn-login' to='/login'>
          sign in
        </NavLink>
      </div> */}

      <div className='ui--home-body'>
        <div className='ui--home-hero'>
          <h1 className='h1'>Unlimited movies, TV shows, and more.</h1>
          <h2 className='h2'>Watch anywhere. Cancel anytime.</h2>
          <h4 className='h4'>Ready to watch? Enter your email to create or restart your membership.</h4>

          <div className='start'>
            <input type='text' placeholder='Email Address' onChange={handleChange} />
            <button type='button' className='btn btn-primary'>
              get started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
