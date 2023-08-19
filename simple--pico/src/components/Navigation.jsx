import React from 'react'

export default function Navigation() {
  return (

      <section>
        <div blur-nagivation-bar='true'></div>
        <nav nagivation-bar='true' className='container-fluid'>
          <ul>
            <li><img src="./vite.svg"/></li>
            <li><strong>SouravUL</strong></li>
          </ul>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact" role='button' className='primary outline'>Contact</a></li>
            {/* <li>
              <input onClick={e=> props.changeTheme} type="checkbox" name="switch" role="switch" />
            </li> */}
          </ul>
        </nav>
      </section>

  )
}
