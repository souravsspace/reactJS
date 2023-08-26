import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
  return (
    <article style={{margin:'0', paddingBlock:'0'}}>
          <nav>
              <ul>
                <li><strong>SouravUl</strong></li>
              </ul>
              <ul>
                <li><Link to='/'>{props.forNav.home}</Link></li>
                <li><Link to='/About'>{props.forNav.about}</Link></li>
                <li><Link to='/Contact'><button>{props.forNav.contact}</button></Link></li>
              </ul>
          </nav>
    </article>
  )
}
