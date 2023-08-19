import React from 'react'

export default function Portfolio(props) {
  return (
    <section id='portfolio' className='container' style={{marginBlock:'6rem'}} > 
        <hgroup>
          <h1>Portfolio</h1>
          <h4>My recent projects</h4>
        </hgroup>
        <div>
            <article className='grid' >
                <div>
                  <img src="https://www.creative-tim.com/blog/content/images/wordpress/2020/02/tailwind-starter-kit-creative-tim-1024x768.png"/>
                  <hgroup>
                    <h2>Tailwind CSS</h2>
                    <h4>The tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</h4>
                  </hgroup>
                </div>
                <div>
                  <img src="https://themewagon.com/wp-content/uploads/2021/10/material-1.png"/>
                  <hgroup>
                    <h2>BootStrap 5</h2>
                    <h4>It is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites</h4>
                  </hgroup>
                </div>
                <div>
                  <img src="https://repository-images.githubusercontent.com/551270939/1f393a8a-f443-4b8b-9fd4-dd3d29b97604"/>
                  <hgroup>
                    <h2>Pico CSS</h2>
                    <h4>Pico CSS is a minimal CSS framework designed to be lightweight and easy to use</h4>
                  </hgroup>
                </div>
            </article>
        </div>
    </section>
  )
}
