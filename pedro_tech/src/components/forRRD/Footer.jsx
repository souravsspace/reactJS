import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <article 
    style={{margin:'0', paddingBlock:'0'
        }}>
          <nav>
              <ul>
                <li><Link to='/'>{props.forNav.home}</Link></li>
                <li><Link to='/contact'>{props.forNav.contact}</Link></li>
                <li><Link to='/about'>{props.forNav.about}</Link></li>
              </ul>
              <ul>
                <li><small style={{fontFamily:'monospace'}}>powered by @souravukil 2019-23</small></li>
              </ul>
          </nav>
    </article>
  )
}
