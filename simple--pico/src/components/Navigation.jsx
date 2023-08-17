import React from 'react'

export default function Navigation() {
  return (

      <nav className='container'>
        <ul>
          <li><strong>SouravUL</strong></li>
        </ul>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Testimonial</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/" role='button' className='primary outline'>Contact</a></li>
        </ul>
      </nav>
      
  )
}
