import React from 'react'

export default function Navigation(props) {
  return (

      <section>
        <div blur-nagivation-bar='true'></div>
        <nav nagivation-bar='true' className='container-fluid'>
          <ul>
            <li><img src="./vite.svg"/></li>
            <li><strong>SouravUL</strong></li>
          </ul>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Courses</a></li>
            <li><a href="/" role='button' className='primary outline'>Contact</a></li>
            {/* <li>
              <input onClick={e=> props.changeTheme} type="checkbox" name="switch" role="switch" />
            </li> */}
          </ul>
        </nav>
      </section>

  )
}
