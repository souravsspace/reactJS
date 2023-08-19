import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <code className='container-fluid' style={{paddingBlock:'1rem'}}>
      <nav className='container-fluid'>
          <ul className='container'>
            <Link style={{marginInline:"1rem"}} to="/">{props.navNames.Home}</Link>
            <Link style={{marginInline:"1rem"}} to="/about">{props.navNames.About}</Link>
            <Link style={{marginInline:"1rem"}} to="/portfolio">{props.navNames.Portfolio}</Link>
            <Link style={{marginInline:"1rem"}} to="/contact">{props.navNames.Contact}</Link>
          </ul>
          <small>copywrite 2019-20 @souravukil</small>
      </nav>
    </code>
  )
}
