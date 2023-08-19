import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
  return (
      <code className='container-fluid' data-theme={props.dataTheme}>
          <nav className='container-fluid'>
          <ul>
            <li><strong>Sourav Ukil</strong></li>
          </ul>
          <ul>
            <li><Link to="/">{props.navNames.Home}</Link></li>
            <li><Link to="/about">{props.navNames.About}</Link></li>
            <li><Link to="/portfolio">{props.navNames.Portfolio}</Link></li>
            <li><Link to="/contact" role="button">{props.navNames.Contact}</Link></li>
            <input type="checkbox" role="switch" 
            onChange={props.handleTheme}
            defaultChecked={props.selectedTheme === 'data-dark'}
            />
          </ul>
          </nav>
      </code>
  )
}
