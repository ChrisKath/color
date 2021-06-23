import { useState, useEffect } from 'react'
import bg from '@image/bg.jpg'

export default function ParallaxComponent() {
  // __STATE <React.Hooks>
  const [posY, setPosY] = useState(0)

  // __FUNCTION
  const setEventListener = (): void => {
    // prettier-ignore
    window.addEventListener('scroll', () => {
      let { innerHeight, scrollY } = window
      if (scrollY < (innerHeight * 2)) {
        let val = scrollY / 3.2
        setPosY(val)
      }
    }, false)
  }

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    setEventListener()
  }, [])

  // __RENDER
  return (
    <div className='ui--parallax'>
      <div className='ui--parallax-container' style={{ transform: `translate(0, ${posY}px)` }}>
        <img className='ui--parallax-image' src={bg} />
        <div className='ui--parallax-overlay'></div>
      </div>
    </div>
  )
}
