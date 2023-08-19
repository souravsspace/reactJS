import React from 'react'

export default function About() {
  return (
    <section className='container' style={{marginBlock:'6rem'}}>
      <div>
        <hgroup>
          <h1>About</h1>
          <h4>What am i ? fullStack or frontEnd Developer </h4>
        </hgroup>
        <article>
        <hgroup>
          <h1>Front-End Developer</h1>
          <h4>What Does a Front-End Developer Do?</h4>
        </hgroup>
          <p>A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>
          <p>Front-end developers work with various technologies, tools, and languages, including:</p>
          <ul>
            <li>HTML (HyperText Markup Language): The standard markup language used to create the structure and layout of web pages.</li>
            <li>CSS (Cascading Style Sheets): A stylesheet language used to control the presentation, formatting, and appearance of web pages, such as colors, fonts, and layout.</li>
            <li>JavaScript: A programming language that allows developers to add interactivity, animations, and other dynamic elements to websites and web applications.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
