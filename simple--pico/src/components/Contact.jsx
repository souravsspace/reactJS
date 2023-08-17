import React from 'react'

export default function Contact() {
  return (
    <section className='container' action="/">
        <hgroup>
          <h1>Contact</h1>
          <h4>Let us know, if we can help you with anything</h4>
        </hgroup>

        <article>
          <div className="grid">
              <label htmlFor="firstName">
                  First Name
                <input type="text" id='firstName' placeholder='First Name' required/>
              </label> 
              <label htmlFor="lastName">
                  Last Name
                <input type="text" id='lastName' placeholder='Last Name' required/>
              </label>
          </div>
          <div>
          <label htmlFor='problemTopic'>
            Problem Topic
            <input type="text" id='problemTopic' placeholder='What is it ?'/>
          </label>
          <textarea placeholder="describe your problem" cols="30" rows="8"></textarea>
          </div>
          <div>
              <label htmlFor="email">Your Email</label> 
              <input type="email" id='email' name='email' placeholder='Your Email' required/>
              <small>We'll never share your email with anyone else.</small>
              <button role='button'>Submit</button>
          </div>
        </article>

    </section>
  )
}
