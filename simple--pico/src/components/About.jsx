import React from 'react'

export default function About() {
  return (

      <section id='about' className="container">
            <hgroup>
                  <h1>About</h1>
                  <h2>Front-End Developer</h2>
            </hgroup>
            <article>
                  <section>
                      <hgroup>
                          <h2>The basic concept</h2>
                          <h4>Front-End Developer Profession</h4>
                      </hgroup>
                      <div>
                          <p>A front-end developer is a type of software developer who specializes in creating and designing the user interface (UI) and user experience (UX) of websites and web applications. The primary responsibility of a front-end developer is to ensure that the visual and interactive aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.</p>
                          <p>Front-end developers work with various technologies, tools, and languages, including:</p>
                          <ul>
                            <li>HTML (HyperText Markup Language): The standard markup language used to create the structure and layout of web pages.</li>
                            <li>CSS (Cascading Style Sheets): A stylesheet language used to control the presentation, formatting, and appearance of web pages, such as colors, fonts, and layout.</li>
                            <li>JavaScript: A programming language that allows developers to add interactivity, animations, and other dynamic elements to websites and web applications.</li>
                          </ul>
                          <p>Front-end developers may also use libraries and frameworks, such as React, Angular, or Vue.js, to streamline their work and create more sophisticated and interactive UIs. Additionally, they often collaborate with back-end developers, who are responsible for the server-side logic and data management, to ensure seamless integration between the front-end and back-end components of a web application or website.</p>
                      </div>
                  </section>
                  <section>
                      <hgroup>
                          <h4>HTML, CSS, & JavaScript</h4>
                      </hgroup>
                      <div>
                          <p>A front-end developer architects and develops websites and applications using web technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation input for non-web platform environments (i.e., React Native).</p>
                          <p>Typically, a person enters into the field of front-end development by learning to develop HTML, CSS, and JavaScript which commonly runs in a web browser but can also run in a headless browser, or as compilation input for a native runtime environment. These four run times scenarios are explained below.</p>
                      </div>
                  </section>
                  <section>
                    <hgroup>
                        <h4>Web Browsers (most common)</h4>
                    </hgroup>
                    <div>
                        <p>A web browser is software used to retrieve, present, and traverse information on the WWW. Typically, browsers run on a desktop or laptop computer, tablet, or phone, but as of late a browser can be found on just about anything (i.e, on a fridge, in cars, etc.). </p>
                        <p>The most common web browsers are (shown in order of most used first):</p>
                        <ul>
                          <li>Chrome</li>
                          <li>Safari</li>
                          <li>Firefox</li>
                          <li>Microsoft Edge</li>
                        </ul>
                    </div>
                  </section>
                  <section>
                    <hgroup>
                      <h4>Headless Browsers</h4>
                    </hgroup>
                    <div>
                      <p>Headless browsers are a web browser without a graphical user interface that can be controlled from a command line interface programmatically for the purpose of web page automation (e.g., functional testing, scraping, unit testing, etc.). Think of headless browsers as a browser that you can run from the command line that can retrieve and traverse web pages.</p>
                      <p>The most common headless browsers are:</p>
                      <ul>
                        <li>Headless Chromium</li>
                        <li>Zombie</li>
                        <li>slimerjs</li>
                      </ul>
                    </div>
                  </section>
                  <section>
                    <hgroup>
                      <h4>Webviews</h4>
                    </hgroup>
                    <div>
                        <p>Webviews are used by a native OS, in a native application, to run web pages. Think of a webview like an iframe or a single tab from a web browser that is embedded in a native application running on a device (e.g., iOS, android, windows).</p>
                        <p>The most common solutions for webview development are:</p>
                        <ul>
                          <li>Electron (typically used for desktop apps)</li>
                          <li>Tauri.js</li>
                          <li>Cordova (typically for native phone/tablet apps)</li>
                          <li>NW.js (typically used for desktop apps)</li>
                        </ul>
                    </div>
                  </section>
                  <section>
                    <hgroup>
                      <h4>Native from Web Tech</h4>
                    </hgroup>
                    <div>
                      <p>Eventually, what is learned from web browser development can be used by front-end developers to craft code for environments that are not fueled by a browser engine. As of late, development environments are being dreamed up that use web technologies (e.g., CSS and JavaScript), without web engines, to create native applications.</p>
                      <p>Some examples of these environments are: </p>
                      <ul>
                        <li>Flutter</li>
                        <li>React Native</li>
                      </ul>
                    </div>
                  </section>
            </article>
      </section>

  )
}
