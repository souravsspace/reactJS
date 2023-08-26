import React from 'react'


export default function HomePage() {

  return (
    <div className='container' style={{marginBlock:'2rem'}}>
        <hgroup>
            <h1>Front-End Developer {name}</h1>
            <h4>Complete Guide to the Front-End Developer Profession</h4>
        </hgroup>
        <article>
            <p>A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>
            <p>nt-end developers work with various technologies, tools, and languages, including:</p>
            <ol>
              <li>HTML (HyperText Markup Language): The standard markup language used to create the structure and layout of web pages.</li>
              <li>CSS (Cascading Style Sheets): A stylesheet language used to control the presentation, formatting, and appearance of web pages, such as colors, fonts, and layout.</li>
              <li>JavaScript: A programming language that allows developers to add interactivity, animations, and other dynamic elements to websites and web applications.</li>
            </ol>
        </article>
    </div>
  )
}
