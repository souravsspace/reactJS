import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <article style={{margin:'0', paddingBlock:'0'}}>
          <nav>
              <ul>
                <li><strong>SouravUl</strong></li>
              </ul>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'><button>Contact</button></Link></li>
              </ul>
          </nav>
    </article>
  )
}
