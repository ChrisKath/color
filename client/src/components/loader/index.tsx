import { useEffect } from 'react'
import { scrollOff } from '../../utils'

export interface PropsType {
  status?: boolean;
  text?: string;
}

export default function LoaderComponent (props: PropsType) {
  // __STATE <React.Hooks>
  const arr = Array.from(Array(10))

  // __EFFECT <React.Hooks>
  useEffect(() => {
    scrollOff()
    return () => scrollOff(false)
  }, [])

  // __RENDER
  return (
    <div className="ui--loader">
      <div className="container">
        <ul className="ui--loader-box">
          { arr.map((item, index) => <li key={index}></li>) }
        </ul>
        <i className="ui--loader-text">{ props.text }</i>
      </div>
    </div>
  )
}
