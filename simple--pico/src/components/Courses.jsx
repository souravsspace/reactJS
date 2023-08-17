import React from 'react'

export default function Courses() {
  return (

    <section id='courses' className='container'>
          <hgroup>
              <h1>Courses</h1>
              <h2>My latest github courses</h2>
          </hgroup>
          <div className='grid'>
              <article courses-card='true'>
                  <img src="https://cdn.wallpapersafari.com/98/10/5kmO9f.png" alt="JavaScript" />
                  <hgroup>
                      <h4>JavaScript</h4>
                      <p>Often just-in-time compiled language that conforms to the ECMAScript</p>
                  </hgroup>
              </article>
              <article courses-card='true'>
                  <img src="https://w0.peakpx.com/wallpaper/1021/487/HD-wallpaper-technology-code-programming-programmer.jpg" alt="React.JS" />
                  <hgroup>
                      <h4>React.JS</h4>
                      <p>React is a library. It lets you put components together</p>
                  </hgroup>
              </article>
              <article courses-card='true'>
                  <img src="https://qph.cf2.quoracdn.net/main-qimg-828261658449dfecdaae6feab0588371" alt="Next.JS" />
                  <hgroup>
                      <h4>Next.JS</h4>
                      <p>Next.js enables you to create full-stack Web applications</p>
                  </hgroup>
              </article>
          </div>

    </section>

  )
}
