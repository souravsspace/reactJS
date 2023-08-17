import React from 'react'

export default function Navigation() {
  return (

      <section>
        <div blurNagivation-bar='true'></div>
        <nav nagivation-bar='true' className='container-fluid'>
          <ul>
            <li><img src="./vite.svg"/></li>
            <li><strong>SouravUL</strong></li>
          </ul>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/" role='button' className='primary outline'>Contact</a></li>
          </ul>
        </nav>
      </section>

  )
}
